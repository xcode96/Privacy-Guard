
import React from 'react';
import type { Category, Script, SubCategory } from '../types';
import { WindowsIcon } from '../components/icons/WindowsIcon';
import { AppleIcon } from '../components/icons/AppleIcon';
import { LinuxIcon } from '../components/icons/LinuxIcon';
import { BrowserIcon } from '../components/icons/BrowserIcon';

export const CATEGORIES: Category[] = [
  { id: 'win', name: 'Windows', icon: React.createElement(WindowsIcon) },
  { id: 'mac', name: 'macOS', icon: React.createElement(AppleIcon) },
  { id: 'linux', name: 'Linux', icon: React.createElement(LinuxIcon) },
  { id: 'browser', name: 'Browsers', icon: React.createElement(BrowserIcon) },
];

export const SUB_CATEGORIES: SubCategory[] = [
  // Windows
  { id: 'win-privacy-cleanup', name: 'Privacy Cleanup', categoryId: 'win' },
  { id: 'win-disable-os-data-collection', name: 'Disable OS Data Collection', categoryId: 'win' },
  { id: 'win-configure-programs', name: 'Configure Programs', categoryId: 'win' },
  { id: 'win-security-improvements', name: 'Security Improvements', categoryId: 'win' },
  { id: 'win-block-tracking-hosts', name: 'Block Tracking Hosts', categoryId: 'win' },
  { id: 'win-privacy-over-security', name: 'Privacy Over Security', categoryId: 'win' },
  { id: 'win-ui-for-privacy', name: 'UI for Privacy', categoryId: 'win' },
  { id: 'win-remove-bloatware', name: 'Remove Bloatware', categoryId: 'win' },
  { id: 'win-advanced-settings', name: 'Advanced Settings', categoryId: 'win' },
  // macOS
  { id: 'mac-privacy-cleanup', name: 'Privacy Cleanup', categoryId: 'mac' },
  { id: 'mac-configure-programs', name: 'Configure Programs', categoryId: 'mac' },
  { id: 'mac-configure-os', name: 'Configure OS', categoryId: 'mac' },
  { id: 'mac-security-improvements', name: 'Security Improvements', categoryId: 'mac' },
  { id: 'mac-privacy-over-security', name: 'Privacy Over Security', categoryId: 'mac' },
  // Linux
  { id: 'linux-privacy-cleanup', name: 'Privacy Cleanup', categoryId: 'linux' },
  { id: 'linux-disable-os-data-collection', name: 'Disable OS Data Collection', categoryId: 'linux' },
  { id: 'linux-configure-programs', name: 'Configure Programs', categoryId: 'linux' },
];


export const INITIAL_SCRIPTS: Script[] = []; // Initial scripts will be loaded dynamically
