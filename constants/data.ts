
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


export const INITIAL_SCRIPTS: Script[] = [
  // Windows
  {
    id: 'win-1',
    categoryId: 'win',
    subCategoryId: 'win-disable-os-data-collection',
    name: 'Disable Telemetry',
    description: 'Stops Windows from collecting and sending diagnostic and usage data to Microsoft.',
    code: `
# Disable Telemetry Service
sc config "DiagTrack" start=disabled
sc stop "DiagTrack"
echo "Telemetry service disabled."
    `.trim(),
  },
  {
    id: 'win-2',
    categoryId: 'win',
    subCategoryId: 'win-remove-bloatware',
    name: 'Remove Bloatware Apps',
    description: 'Uninstalls common pre-installed applications like Candy Crush, Xbox apps, etc.',
    code: `
# Example: Remove Candy Crush
Get-AppxPackage *candycrush* | Remove-AppxPackage
echo "Bloatware removal script executed (example). Add more apps as needed."
    `.trim(),
  },
  {
    id: 'win-3',
    categoryId: 'win',
    subCategoryId: 'win-disable-os-data-collection',
    name: 'Disable Cortana',
    description: 'Disables the personal assistant to prevent background activity and data collection.',
    code: `
# Disable Cortana through registry (requires admin)
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v "AllowCortana" /t REG_DWORD /d 0 /f
echo "Cortana disabled."
    `.trim(),
  },
  // macOS
  {
    id: 'mac-1',
    categoryId: 'mac',
    subCategoryId: 'mac-privacy-cleanup',
    name: 'Disable Siri Analytics',
    description: 'Stops macOS from sending Siri usage data and analytics to Apple.',
    code: `
# Disable Siri Analytics
defaults write com.apple.assistant.support 'Siri Data Sharing Opt-In Status' -int 2
echo "Siri analytics disabled."
    `.trim(),
  },
  {
    id: 'mac-2',
    categoryId: 'mac',
    subCategoryId: 'mac-configure-os',
    name: 'Show Hidden Files in Finder',
    description: 'Configures Finder to always show hidden files and folders (e.g., .bash_profile).',
    code: `
# Show all hidden files
defaults write com.apple.finder AppleShowAllFiles -bool true
killall Finder
echo "Finder will now show hidden files."
    `.trim(),
  },
  // Linux
  {
    id: 'linux-1',
    categoryId: 'linux',
    subCategoryId: 'linux-configure-programs',
    name: 'Harden SSH Configuration',
    description: 'Strengthens SSH security by disabling root login and password authentication.',
    code: `
# Harden SSH config (edit /etc/ssh/sshd_config)
# Ensure these lines are present and uncommented:
# PermitRootLogin no
# PasswordAuthentication no
echo "Remember to manually edit /etc/ssh/sshd_config and restart sshd."
    `.trim(),
  },
  {
    id: 'linux-2',
    categoryId: 'linux',
    subCategoryId: 'linux-configure-programs',
    name: 'Install and Configure UFW',
    description: 'Sets up Uncomplicated Firewall (UFW) to block incoming connections by default.',
    code: `
# Install UFW on Debian/Ubuntu
sudo apt-get update
sudo apt-get install ufw -y
# Basic setup
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
echo "UFW firewall is now enabled."
    `.trim(),
  },
  // Browsers
  {
    id: 'browser-1',
    categoryId: 'browser',
    name: 'Clear Browser Cache',
    description: 'A general reminder and placeholder for scripts that would clear browser data.',
    code: `
# This is a placeholder. Clearing browser data is typically done in browser settings.
# For Firefox on Linux, you could do:
# rm -rf ~/.cache/mozilla/firefox/*
echo "Action required: Clear cache and cookies in your browser settings."
    `.trim(),
  },
  {
    id: 'browser-2',
    categoryId: 'browser',
    name: 'Disable WebRTC IP Leak',
    description: 'Suggests using an extension like uBlock Origin to prevent IP address leaks via WebRTC.',
    code: `
# Action required: Install a browser extension like uBlock Origin or WebRTC Leak Prevent.
# In uBlock Origin settings, check "Prevent WebRTC from leaking local IP addresses."
echo "Install a browser extension to prevent WebRTC leaks."
    `.trim(),
  },
];
