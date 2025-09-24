import { GoogleGenAI, Type } from "@google/genai";
import type { Script } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// FIX: Removed deprecated 'required' field from schema. Properties are required by default.
const schema = {
  type: Type.OBJECT,
  properties: {
    scriptIds: {
      type: Type.ARRAY,
      description: "An array of script IDs that are relevant to the user's query.",
      items: {
        type: Type.STRING,
      },
    },
  },
};

/**
 * Uses Gemini to find relevant scripts based on a user's natural language query.
 * @param query The user's search query.
 * @param allScripts The complete list of available scripts.
 * @returns A promise that resolves to an array of relevant script IDs.
 */
export async function getScriptsForQuery(query: string, allScripts: Script[]): Promise<string[]> {
  const simplifiedScripts = allScripts.map(s => ({
    id: s.id,
    name: s.name,
    description: s.description,
  }));

  const prompt = `
    Analyze the user's query and the provided list of available scripts.
    Your task is to identify which scripts are most relevant to the user's request.
    Only return the IDs of scripts from the provided list. Do not invent scripts or IDs.

    User's Query: "${query}"

    Available Scripts:
    ${JSON.stringify(simplifiedScripts, null, 2)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    if (response.text) {
        // FIX: Trim whitespace from the response before parsing as JSON.
        const jsonResponse = JSON.parse(response.text.trim());
        if (jsonResponse.scriptIds && Array.isArray(jsonResponse.scriptIds)) {
            return jsonResponse.scriptIds.filter(id => typeof id === 'string');
        }
    }
    return [];
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get AI recommendations.");
  }
}