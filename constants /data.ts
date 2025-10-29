import React from 'react';
import type { Category, Script, SubCategory } from '../types';
import { WindowsIcon } from '../components/icons/WindowsIcon';
import { AppleIcon } from '../components/icons/AppleIcon';
import { LinuxIcon } from '../components/icons/LinuxIcon';
import { BrowserIcon } from '../components/icons/BrowserIcon';

export const CATEGORIES: Category[] = [
  {
    "id": "win",
    "name": "Windows",
    "icon": {
      "key": null,
      "ref": null,
      "props": {}
    }
  },
  {
    "id": "mac",
    "name": "macOS",
    "icon": {
      "key": null,
      "ref": null,
      "props": {}
    }
  },
  {
    "id": "linux",
    "name": "Linux",
    "icon": {
      "key": null,
      "ref": null,
      "props": {}
    }
  },
  {
    "id": "browser",
    "name": "Browsers",
    "icon": {
      "key": null,
      "ref": null,
      "props": {}
    }
  }
];

export const SUB_CATEGORIES: SubCategory[] = [
  {
    "id": "win-privacy-cleanup",
    "name": "Privacy Cleanup",
    "categoryId": "win"
  },
  {
    "id": "win-disable-os-data-collection",
    "name": "Disable OS Data Collection",
    "categoryId": "win"
  },
  {
    "id": "win-configure-programs",
    "name": "Configure Programs",
    "categoryId": "win"
  },
  {
    "id": "win-security-improvements",
    "name": "Security Improvements",
    "categoryId": "win"
  },
  {
    "id": "win-block-tracking-hosts",
    "name": "Block Tracking Hosts",
    "categoryId": "win"
  },
  {
    "id": "win-privacy-over-security",
    "name": "Privacy Over Security",
    "categoryId": "win"
  },
  {
    "id": "win-ui-for-privacy",
    "name": "UI for Privacy",
    "categoryId": "win"
  },
  {
    "id": "win-remove-bloatware",
    "name": "Remove Bloatware",
    "categoryId": "win"
  },
  {
    "id": "win-advanced-settings",
    "name": "Advanced Settings",
    "categoryId": "win"
  },
  {
    "id": "mac-privacy-cleanup",
    "name": "Privacy Cleanup",
    "categoryId": "mac"
  },
  {
    "id": "mac-configure-programs",
    "name": "Configure Programs",
    "categoryId": "mac"
  },
  {
    "id": "mac-configure-os",
    "name": "Configure OS",
    "categoryId": "mac"
  },
  {
    "id": "mac-security-improvements",
    "name": "Security Improvements",
    "categoryId": "mac"
  },
  {
    "id": "mac-privacy-over-security",
    "name": "Privacy Over Security",
    "categoryId": "mac"
  },
  {
    "id": "linux-privacy-cleanup",
    "name": "Privacy Cleanup",
    "categoryId": "linux"
  },
  {
    "id": "linux-disable-os-data-collection",
    "name": "Disable OS Data Collection",
    "categoryId": "linux"
  },
  {
    "id": "linux-configure-programs",
    "name": "Configure Programs",
    "categoryId": "linux"
  }
];

export const INITIAL_SCRIPTS: Script[] = [
  {
    "id": "win-1",
    "categoryId": "win",
    "subCategoryId": "win-disable-os-data-collection",
    "name": "Disable Telemetry",
    "description": "Stops Windows from collecting and sending diagnostic and usage data to Microsoft.",
    "code": "# Disable Telemetry Service\nsc config \"DiagTrack\" start=disabled\nsc stop \"DiagTrack\"\necho \"Telemetry service disabled.\""
  },
  {
    "id": "win-2",
    "categoryId": "win",
    "subCategoryId": "win-remove-bloatware",
    "name": "Remove Bloatware Apps",
    "description": "Uninstalls common pre-installed applications like Candy Crush, Xbox apps, etc.",
    "code": "# Example: Remove Candy Crush\nGet-AppxPackage *candycrush* | Remove-AppxPackage\necho \"Bloatware removal script executed (example). Add more apps as needed.\""
  },
  {
    "id": "win-3",
    "categoryId": "win",
    "subCategoryId": "win-disable-os-data-collection",
    "name": "Disable Cortana",
    "description": "Disables the personal assistant to prevent background activity and data collection.",
    "code": "# Disable Cortana through registry (requires admin)\nreg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search\" /v \"AllowCortana\" /t REG_DWORD /d 0 /f\necho \"Cortana disabled.\""
  },
  {
    "id": "mac-1",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable automatic downloads for Parallels Desktop updates",
    "description": "Disable automatic downloads for Parallels Desktop updates",
    "code": "defaults write 'com.parallels.Parallels Desktop' 'Application preferences.Download updates automatically' -bool no"
  },
  {
    "id": "mac-2",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable automatic checks for Parallels Desktop updates",
    "description": "Disable automatic checks for Parallels Desktop updates",
    "code": "defaults write 'com.parallels.Parallels Desktop' 'Application preferences.Check for updates' -int 0"
  },
  {
    "id": "mac-3",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable Parallels Desktop advertisements",
    "description": "Disable Parallels Desktop advertisements",
    "code": "defaults write 'com.parallels.Parallels Desktop' 'ProductPromo.ForcePromoOff' -bool yes\ndefaults write 'com.parallels.Parallels Desktop' 'WelcomeScreenPromo.PromoOff' -bool yes"
  },
  {
    "id": "mac-4",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear CUPS printer job cache",
    "description": "Clear CUPS printer job cache",
    "code": "sudo rm -rfv /var/spool/cups/c0*\nsudo rm -rfv /var/spool/cups/tmp/*\nsudo rm -rfv /var/spool/cups/cache/job.cache*"
  },
  {
    "id": "mac-5",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Empty trash on all volumes",
    "description": "Empty trash on all volumes",
    "code": "sudo rm -rfv /Volumes/*/.Trashes/* &>/dev/null\nsudo rm -rfv ~/.Trash/* &>/dev/null"
  },
  {
    "id": "mac-6",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear system cache",
    "description": "Clear system cache",
    "code": "sudo rm -rfv /Library/Caches/* &>/dev/null\nsudo rm -rfv /System/Library/Caches/* &>/dev/null\nsudo rm -rfv ~/Library/Caches/* &>/dev/null"
  },
  {
    "id": "mac-7",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Xcode's derived data and archives",
    "description": "Clear Xcode's derived data and archives",
    "code": "rm -rfv ~/Library/Developer/Xcode/DerivedData/* &>/dev/null\nrm -rfv ~/Library/Developer/Xcode/Archives/* &>/dev/null\nrm -rfv ~/Library/Developer/Xcode/iOS Device Logs/* &>/dev/null"
  },
  {
    "id": "mac-8",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear DNS cache",
    "description": "Clear DNS cache",
    "code": "sudo dscacheutil -flushcache\nsudo killall -HUP mDNSResponder"
  },
  {
    "id": "mac-9",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear inactive memory",
    "description": "Clear inactive memory",
    "code": "sudo purge"
  },
  {
    "id": "mac-10",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Remove Guest User",
    "description": "Remove Guest User",
    "code": "if ! command -v 'sysadminctl' &> /dev/null; then\n    echo 'Skipping because \"sysadminctl\" is not found.'\nelse\n    sudo sysadminctl -deleteUser Guest\nfi\nif ! command -v 'fdesetup' &> /dev/null; then\n    echo 'Skipping because \"fdesetup\" is not found.'\nelse\n    sudo fdesetup remove -user Guest\nfi\nif ! command -v 'dscl' &> /dev/null; then\n    echo 'Skipping because \"dscl\" is not found.'\nelse\n    sudo dscl . delete /Users/Guest\nfi"
  },
  {
    "id": "mac-11",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable Firefox telemetry",
    "description": "Disable Firefox telemetry",
    "code": "sudo defaults write /Library/Preferences/org.mozilla.firefox EnterprisePoliciesEnabled -bool TRUE\nsudo defaults write /Library/Preferences/org.mozilla.firefox DisableTelemetry -bool TRUE"
  },
  {
    "id": "mac-12",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable Microsoft Office telemetry",
    "description": "Disable Microsoft Office telemetry",
    "code": "defaults write com.microsoft.office DiagnosticDataTypePreference -string ZeroDiagnosticData"
  },
  {
    "id": "mac-13",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Remove Google Software Update service",
    "description": "Remove Google Software Update service",
    "code": "googleUpdateFile=~/Library/Google/GoogleSoftwareUpdate/GoogleSoftwareUpdate.bundle/Contents/Resources/ksinstall\nif [ -f \"$googleUpdateFile\" ]; then\n    $googleUpdateFile --nuke\n    echo 'Uninstalled Google update'\nelse\n    echo 'Google update file does not exist'\nfi"
  },
  {
    "id": "mac-14",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable Homebrew user behavior analytics",
    "description": "Disable Homebrew user behavior analytics",
    "code": "command='export HOMEBREW_NO_ANALYTICS=1'\ndeclare -a profile_files=(\"$HOME/.bash_profile\" \"$HOME/.zprofile\")\nfor profile_file in \"${profile_files[@]}\"\ndo\n    touch \"$profile_file\"\n    if ! grep -q \"$command\" \"${profile_file}\"; then\n        echo \"$command\" >> \"$profile_file\"\n        echo \"[$profile_file] Configured\"\n    else\n        echo \"[$profile_file] No need for any action, already configured\"\n    fi\ndone"
  },
  {
    "id": "mac-15",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable NET Core CLI telemetry",
    "description": "Disable NET Core CLI telemetry",
    "code": "command='export DOTNET_CLI_TELEMETRY_OPTOUT=1'\ndeclare -a profile_files=(\"$HOME/.bash_profile\" \"$HOME/.zprofile\")\nfor profile_file in \"${profile_files[@]}\"\ndo\n    touch \"$profile_file\"\n    if ! grep -q \"$command\" \"${profile_file}\"; then\n        echo \"$command\" >> \"$profile_file\"\n        echo \"[$profile_file] Configured\"\n    else\n        echo \"[$profile_file] No need for any action, already configured\"\n    fi\ndone"
  },
  {
    "id": "mac-16",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Disable PowerShell Core telemetry",
    "description": "Disable PowerShell Core telemetry",
    "code": "command='export POWERSHELL_TELEMETRY_OPTOUT=1'\ndeclare -a profile_files=(\"$HOME/.bash_profile\" \"$HOME/.zprofile\")\nfor profile_file in \"${profile_files[@]}\"\ndo\n    touch \"$profile_file\"\n    if ! grep -q \"$command\" \"${profile_file}\"; then\n        echo \"$command\" >> \"$profile_file\"\n        echo \"[$profile_file] Configured\"\n    else\n        echo \"[$profile_file] No need for any action, already configured\"\n    fi\ndone"
  },
  {
    "id": "mac-17",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable online spell correction",
    "description": "Disable online spell correction",
    "code": "defaults write NSGlobalDomain WebAutomaticSpellingCorrectionEnabled -bool false"
  },
  {
    "id": "mac-18",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable remote Apple events",
    "description": "Disable remote Apple events",
    "code": "sudo systemsetup -setremoteappleevents off"
  },
  {
    "id": "mac-19",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic storage of documents in iCloud Drive",
    "description": "Disable automatic storage of documents in iCloud Drive",
    "code": "defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false"
  },
  {
    "id": "mac-20",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable display of recent applications on Dock",
    "description": "Disable display of recent applications on Dock",
    "code": "defaults write com.apple.dock show-recents -bool false"
  },
  {
    "id": "mac-21",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable AirDrop file sharing",
    "description": "Disable AirDrop file sharing",
    "code": "defaults write com.apple.NetworkBrowser DisableAirDrop -bool true"
  },
  {
    "id": "mac-22",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable Spotlight indexing",
    "description": "Disable Spotlight indexing",
    "code": "sudo mdutil -i off -d /"
  },
  {
    "id": "mac-23",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable personalized advertisements and identifier tracking",
    "description": "Disable personalized advertisements and identifier tracking",
    "code": "defaults write com.apple.AdLib allowIdentifierForAdvertising -bool false\ndefaults write com.apple.AdLib allowApplePersonalizedAdvertising -bool false\ndefaults write com.apple.AdLib forceLimitAdTracking -bool true"
  },
  {
    "id": "mac-24",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable date and time in screenshot filenames",
    "description": "Disable date and time in screenshot filenames",
    "code": "defaults write 'com.apple.screencapture' 'include-date' -bool false\nkillall SystemUIServer"
  },
  {
    "id": "mac-25",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable captive portal detection",
    "description": "Disable captive portal detection",
    "code": "sudo defaults write '/Library/Preferences/SystemConfiguration/com.apple.captive.control.plist' Active -bool false"
  },
  {
    "id": "mac-26",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable library validation entitlement (library signature validation)",
    "description": "Disable library validation entitlement (library signature validation)",
    "code": "sudo defaults write /Library/Preferences/com.apple.security.libraryvalidation.plist 'DisableLibraryValidation' -bool true"
  },
  {
    "id": "mac-27",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear bash history",
    "description": "Clear bash history",
    "code": "rm -f ~/.bash_history"
  },
  {
    "id": "mac-28",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear zsh history",
    "description": "Clear zsh history",
    "code": "rm -f ~/.zsh_history"
  },
  {
    "id": "mac-29",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Apple System Logs (ASL)",
    "description": "Clear Apple System Logs (ASL)",
    "code": "glob_pattern=\"/private/var/log/asl/*\"\nsudo rm -rfv $glob_pattern\nglob_pattern=\"/private/var/log/asl.log\"\nsudo rm -fv $glob_pattern\nglob_pattern=\"/private/var/log/asl.db\"\nsudo rm -fv $glob_pattern"
  },
  {
    "id": "mac-30",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear installation logs",
    "description": "Clear installation logs",
    "code": "glob_pattern=\"/private/var/log/install.log\"\nsudo rm -fv $glob_pattern"
  },
  {
    "id": "mac-31",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear all system logs",
    "description": "Clear all system logs",
    "code": "glob_pattern=\"/private/var/log/*\"\nsudo rm -rfv $glob_pattern"
  },
  {
    "id": "mac-32",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear system application logs",
    "description": "Clear system application logs",
    "code": "glob_pattern=\"/Library/Logs/*\"\nsudo rm -rfv $glob_pattern"
  },
  {
    "id": "mac-33",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear user application logs",
    "description": "Clear user application logs",
    "code": "glob_pattern=\"$HOME/Library/Logs/*\"\n rm -rfv $glob_pattern"
  },
  {
    "id": "mac-34",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Mail app logs",
    "description": "Clear Mail app logs",
    "code": "glob_pattern=\"$HOME/Library/Containers/com.apple.mail/Data/Library/Logs/Mail/*\"\n rm -rfv $glob_pattern"
  },
  {
    "id": "mac-35",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear user activity audit logs (login, logout, authentication, etc.)",
    "description": "Clear user activity audit logs (login, logout, authentication, etc.)",
    "code": "glob_pattern=\"/private/var/audit/*\"\nsudo rm -rfv $glob_pattern"
  },
  {
    "id": "mac-36",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear system maintenance logs",
    "description": "Clear system maintenance logs",
    "code": "glob_pattern=\"/private/var/log/daily.out\"\nsudo rm -fv $glob_pattern\nglob_pattern=\"/private/var/log/weekly.out\"\nsudo rm -fv $glob_pattern\nglob_pattern=\"/private/var/log/monthly.out\"\nsudo rm -fv $glob_pattern"
  },
  {
    "id": "mac-37",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear app installation logs",
    "description": "Clear app installation logs",
    "code": "glob_pattern=\"/private/var/db/receipts/*\"\nsudo rm -rfv $glob_pattern\nglob_pattern=\"/Library/Receipts/InstallHistory.plist\"\n rm -fv $glob_pattern"
  },
  {
    "id": "mac-38",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Adobe cache",
    "description": "Clear Adobe cache",
    "code": "sudo rm -rfv ~/Library/Application\\ Support/Adobe/Common/Media\\ Cache\\ Files/* &>/dev/null"
  },
  {
    "id": "mac-39",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Gradle cache",
    "description": "Clear Gradle cache",
    "code": "if [ -d \"~/.gradle/caches\" ]; then\n    rm -rfv ~/.gradle/caches/ &> /dev/null\nfi"
  },
  {
    "id": "mac-40",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Dropbox cache",
    "description": "Clear Dropbox cache",
    "code": "if [ -d \"~/Dropbox/.dropbox.cache\" ]; then\n    sudo rm -rfv ~/Dropbox/.dropbox.cache/* &>/dev/null\nfi"
  },
  {
    "id": "mac-41",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Google Drive File Stream cache",
    "description": "Clear Google Drive File Stream cache",
    "code": "killall \"Google Drive File Stream\"\nrm -rfv ~/Library/Application\\ Support/Google/DriveFS/[0-9a-zA-Z]*/content_cache &>/dev/null"
  },
  {
    "id": "mac-42",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Composer cache",
    "description": "Clear Composer cache",
    "code": "if type \"composer\" &> /dev/null; then\n    composer clearcache &> /dev/null\nfi"
  },
  {
    "id": "mac-43",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Homebrew cache",
    "description": "Clear Homebrew cache",
    "code": "if type \"brew\" &>/dev/null; then\n    brew cleanup -s &>/dev/null\n    rm -rfv $(brew --cache) &>/dev/null\n    brew tap --repair &>/dev/null\nfi"
  },
  {
    "id": "mac-44",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear old Ruby gem versions",
    "description": "Clear old Ruby gem versions",
    "code": "if type \"gem\" &> /dev/null; then\n    gem cleanup &>/dev/null\nfi"
  },
  {
    "id": "mac-45",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear unused Docker data",
    "description": "Clear unused Docker data",
    "code": "if type \"docker\" &> /dev/null; then\n    docker system prune -af\nfi"
  },
  {
    "id": "mac-46",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Pyenv-Virtualenv cache",
    "description": "Clear Pyenv-Virtualenv cache",
    "code": "if [ \"$PYENV_VIRTUALENV_CACHE_PATH\" ]; then\n    rm -rfv $PYENV_VIRTUALENV_CACHE_PATH &>/dev/null\nfi"
  },
  {
    "id": "mac-47",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear NPM cache",
    "description": "Clear NPM cache",
    "code": "if type \"npm\" &> /dev/null; then\n    npm cache clean --force\nfi"
  },
  {
    "id": "mac-48",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear Yarn cache",
    "description": "Clear Yarn cache",
    "code": "if type \"yarn\" &> /dev/null; then\n    echo 'Cleanup Yarn Cache...'\n    yarn cache clean --force\nfi"
  },
  {
    "id": "mac-49",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear iOS app copies from iTunes",
    "description": "Clear iOS app copies from iTunes",
    "code": "rm -rfv ~/Music/iTunes/iTunes\\ Media/Mobile\\ Applications/* &>/dev/null"
  },
  {
    "id": "mac-50",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear iOS photo cache",
    "description": "Clear iOS photo cache",
    "code": "rm -rf ~/Pictures/iPhoto\\ Library/iPod\\ Photo\\ Cache/*"
  },
  {
    "id": "mac-51",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear iOS Device Backups",
    "description": "Clear iOS Device Backups",
    "code": "rm -rfv ~/Library/Application\\ Support/MobileSync/Backup/* &>/dev/null"
  },
  {
    "id": "mac-52",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-programs",
    "name": "Clear iOS simulators",
    "description": "Clear iOS simulators",
    "code": "if type \"xcrun\" &>/dev/null; then\n    osascript -e 'tell application \"com.apple.CoreSimulator.CoreSimulatorService\" to quit'\n    osascript -e 'tell application \"iOS Simulator\" to quit'\n    osascript -e 'tell application \"Simulator\" to quit'\n    xcrun simctl shutdown all\n    xcrun simctl erase all\nfi"
  },
  {
    "id": "mac-53",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear list of connected iOS devices",
    "description": "Clear list of connected iOS devices",
    "code": "sudo defaults delete /Users/$USER/Library/Preferences/com.apple.iPod.plist \"conn:128:Last Connect\"\nsudo defaults delete /Users/$USER/Library/Preferences/com.apple.iPod.plist Devices\nsudo defaults delete /Library/Preferences/com.apple.iPod.plist \"conn:128:Last Connect\"\nsudo defaults delete /Library/Preferences/com.apple.iPod.plist Devices\nsudo rm -rfv /var/db/lockdown/*"
  },
  {
    "id": "mac-54",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"All\" permissions",
    "description": "Clear \"All\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='All'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-55",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Camera\" permissions",
    "description": "Clear \"Camera\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='Camera'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-56",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Microphone\" permissions",
    "description": "Clear \"Microphone\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='Microphone'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-57",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Accessibility\" permissions",
    "description": "Clear \"Accessibility\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='Accessibility'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-58",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Screen Capture\" permissions",
    "description": "Clear \"Screen Capture\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='ScreenCapture'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-59",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Reminders\" permissions",
    "description": "Clear \"Reminders\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='Reminders'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-60",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Photos\" permissions",
    "description": "Clear \"Photos\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='Photos'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-61",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Calendar\" permissions",
    "description": "Clear \"Calendar\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='Calendar'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-62",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Full Disk Access\" permissions",
    "description": "Clear \"Full Disk Access\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyAllFiles'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-63",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Contacts\" permissions",
    "description": "Clear \"Contacts\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='AddressBook'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-64",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Desktop Folder\" permissions",
    "description": "Clear \"Desktop Folder\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyDesktopFolder'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-65",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Documents Folder\" permissions",
    "description": "Clear \"Documents Folder\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyDocumentsFolder'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-66",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Downloads Folder\" permissions",
    "description": "Clear \"Downloads Folder\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyDownloadsFolder'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-67",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Apple Events\" permissions",
    "description": "Clear \"Apple Events\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='AppleEvents'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-68",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"File Provider Presence\" permissions",
    "description": "Clear \"File Provider Presence\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='FileProviderPresence'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-69",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Listen Events\" permissions",
    "description": "Clear \"Listen Events\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='ListenEvent'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-70",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Media Library\" permissions",
    "description": "Clear \"Media Library\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='MediaLibrary'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-71",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Post Event\" permissions",
    "description": "Clear \"Post Event\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='PostEvent'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-72",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Speech Recognition\" permissions",
    "description": "Clear \"Speech Recognition\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SpeechRecognition'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-73",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"App Modification\" permissions",
    "description": "Clear \"App Modification\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyAppBundles'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-74",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Application Data\" permissions",
    "description": "Clear \"Application Data\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyAppData'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-75",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Network Volumes\" permissions",
    "description": "Clear \"Network Volumes\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyNetworkVolumes'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-76",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"Removable Volumes\" permissions",
    "description": "Clear \"Removable Volumes\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicyRemovableVolumes'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-77",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Clear \"System Administration Files\" permissions",
    "description": "Clear \"System Administration Files\" permissions",
    "code": "if ! command -v 'tccutil' &> /dev/null; then\n    echo 'Skipping because \"tccutil\" is not found.'\nelse\n    declare serviceId='SystemPolicySysAdminFiles'\ndeclare reset_output reset_exit_code\n{\n    reset_output=$(tccutil reset \"$serviceId\" 2>&1)\n    reset_exit_code=$?\n}\nif [ $reset_exit_code -eq 0 ]; then\n    echo \"Successfully reset permissions for \\\"${serviceId}\\\".\"\nelif [ $reset_exit_code -eq 70 ]; then\n    echo \"Skipping, service ID \\\"${serviceId}\\\" is not supported on your operating system version.\"\nelif [ $reset_exit_code -ne 0 ]; then\n    >&2 echo \"Failed to reset permissions for \\\"${serviceId}\\\". Exit code: $reset_exit_code.\"\n    if [ -n \"$reset_output\" ]; then\n        echo \"Output from \\`tccutil\\`: $reset_output.\"\n    fi\nfi\nfi"
  },
  {
    "id": "mac-78",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear diagnostic logs",
    "description": "Clear diagnostic logs",
    "code": "glob_pattern=\"/private/var/db/diagnostics/*\"\nsudo rm -rfv $glob_pattern"
  },
  {
    "id": "mac-79",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear diagnostic log details",
    "description": "Clear diagnostic log details",
    "code": "glob_pattern=\"/private/var/db/uuidtext/*\"\nsudo rm -rfv $glob_pattern"
  },
  {
    "id": "mac-80",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Chrome browsing history",
    "description": "Clear Chrome browsing history",
    "code": "rm -rfv ~/Library/Application\\ Support/Google/Chrome/Default/History &>/dev/null\nrm -rfv ~/Library/Application\\ Support/Google/Chrome/Default/History-journal &>/dev/null"
  },
  {
    "id": "mac-81",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Chrome cache",
    "description": "Clear Chrome cache",
    "code": "sudo rm -rfv ~/Library/Application\\ Support/Google/Chrome/Default/Application\\ Cache/* &>/dev/null"
  },
  {
    "id": "mac-82",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari browsing history",
    "description": "Clear Safari browsing history",
    "code": "rm -f ~/Library/Safari/History.db\nrm -f ~/Library/Safari/History.db-lock\nrm -f ~/Library/Safari/History.db-shm\nrm -f ~/Library/Safari/History.db-wal\nrm -f ~/Library/Safari/History.plist\nrm -f ~/Library/Safari/HistoryIndex.sk"
  },
  {
    "id": "mac-83",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari downloads history",
    "description": "Clear Safari downloads history",
    "code": "rm -f ~/Library/Safari/Downloads.plist"
  },
  {
    "id": "mac-84",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari frequently visited sites",
    "description": "Clear Safari frequently visited sites",
    "code": "rm -f ~/Library/Safari/TopSites.plist"
  },
  {
    "id": "mac-85",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari last session (open tabs) history",
    "description": "Clear Safari last session (open tabs) history",
    "code": "rm -f ~/Library/Safari/LastSession.plist"
  },
  {
    "id": "mac-86",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari history copy",
    "description": "Clear Safari history copy",
    "code": "rm -rfv ~/Library/Caches/Metadata/Safari/History"
  },
  {
    "id": "mac-87",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear search term history embedded in Safari preferences",
    "description": "Clear search term history embedded in Safari preferences",
    "code": "defaults write ~/Library/Preferences/com.apple.Safari RecentSearchStrings '( )'"
  },
  {
    "id": "mac-88",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari cookies",
    "description": "Clear Safari cookies",
    "code": "rm -f ~/Library/Cookies/Cookies.binarycookies\nrm -f ~/Library/Cookies/Cookies.plist"
  },
  {
    "id": "mac-89",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari zoom level preferences per site",
    "description": "Clear Safari zoom level preferences per site",
    "code": "rm -f ~/Library/Safari/PerSiteZoomPreferences.plist"
  },
  {
    "id": "mac-90",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear allowed URLs for Safari notifications",
    "description": "Clear allowed URLs for Safari notifications",
    "code": "rm -f ~/Library/Safari/UserNotificationPreferences.plist"
  },
  {
    "id": "mac-91",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari preferences for downloads, geolocation, pop-ups, and autoplay per site",
    "description": "Clear Safari preferences for downloads, geolocation, pop-ups, and autoplay per site",
    "code": "rm -f ~/Library/Safari/PerSitePreferences.db"
  },
  {
    "id": "mac-92",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox cache",
    "description": "Clear Firefox cache",
    "code": "sudo rm -rf ~/Library/Caches/Mozilla/\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/netpredictions.sqlite"
  },
  {
    "id": "mac-93",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox form history",
    "description": "Clear Firefox form history",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/formhistory.sqlite\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/formhistory.dat"
  },
  {
    "id": "mac-94",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox site preferences",
    "description": "Clear Firefox site preferences",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/content-prefs.sqlite"
  },
  {
    "id": "mac-95",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox session restore data (loads after the browser closes or crashes)",
    "description": "Clear Firefox session restore data (loads after the browser closes or crashes)",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionCheckpoints.json\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore*.js*\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore.bak*\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore-backups/previous.js*\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore-backups/recovery.js*\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore-backups/recovery.bak*\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore-backups/previous.bak*\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/sessionstore-backups/upgrade.js*-20*"
  },
  {
    "id": "mac-96",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox passwords",
    "description": "Clear Firefox passwords",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/signons.txt\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/signons2.txt\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/signons3.txt\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/signons.sqlite\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/logins.json"
  },
  {
    "id": "mac-97",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox HTML5 cookies",
    "description": "Clear Firefox HTML5 cookies",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/webappsstore.sqlite"
  },
  {
    "id": "mac-98",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox crash reports",
    "description": "Clear Firefox crash reports",
    "code": "rm -rfv ~/Library/Application\\ Support/Firefox/Crash\\ Reports/\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/minidumps/*.dmp"
  },
  {
    "id": "mac-99",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox backup files",
    "description": "Clear Firefox backup files",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/bookmarkbackups/*.json\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/bookmarkbackups/*.jsonlz4"
  },
  {
    "id": "mac-100",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Firefox cookies",
    "description": "Clear Firefox cookies",
    "code": "rm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/cookies.txt\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/cookies.sqlite\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/cookies.sqlite-shm\nrm -fv ~/Library/Application\\ Support/Firefox/Profiles/*/cookies.sqlite-wal\nrm -rfv ~/Library/Application\\ Support/Firefox/Profiles/*/storage/default/http*"
  },
  {
    "id": "mac-101",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari cached blobs, URLs and timestamps",
    "description": "Clear Safari cached blobs, URLs and timestamps",
    "code": "rm -f ~/Library/Caches/com.apple.Safari/Cache.db"
  },
  {
    "id": "mac-102",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari URL bar web page icons",
    "description": "Clear Safari URL bar web page icons",
    "code": "rm -f ~/Library/Safari/WebpageIcons.db"
  },
  {
    "id": "mac-103",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear Safari webpage previews (thumbnails)",
    "description": "Clear Safari webpage previews (thumbnails)",
    "code": "rm -rfv ~/Library/Caches/com.apple.Safari/Webpage\\ Previews"
  },
  {
    "id": "mac-104",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear privacy.sexy script history",
    "description": "Clear privacy.sexy script history",
    "code": "glob_pattern=\"$HOME/Library/Application Support/privacy.sexy/runs/*\"\n rm -rfv $glob_pattern"
  },
  {
    "id": "mac-105",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear privacy.sexy activity logs",
    "description": "Clear privacy.sexy activity logs",
    "code": "glob_pattern=\"$HOME/Library/Logs/privacy.sexy/*\"\n rm -rfv $glob_pattern"
  },
  {
    "id": "mac-106",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable remote management service",
    "description": "Disable remote management service",
    "code": "sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -stop"
  },
  {
    "id": "mac-107",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Remove Apple Remote Desktop Settings",
    "description": "Remove Apple Remote Desktop Settings",
    "code": "sudo rm -rf /var/db/RemoteManagement\nsudo defaults delete /Library/Preferences/com.apple.RemoteDesktop.plist\ndefaults delete ~/Library/Preferences/com.apple.RemoteDesktop.plist\nsudo rm -rf /Library/Application\\ Support/Apple/Remote\\ Desktop/\nrm -r ~/Library/Application\\ Support/Remote\\ Desktop/\nrm -r ~/Library/Containers/com.apple.RemoteDesktop"
  },
  {
    "id": "mac-108",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable participation in Siri data collection",
    "description": "Disable participation in Siri data collection",
    "code": "defaults write com.apple.assistant.support 'Siri Data Sharing Opt-In Status' -int 2"
  },
  {
    "id": "mac-109",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable \"Ask Siri\"",
    "description": "Disable \"Ask Siri\"",
    "code": "defaults write com.apple.assistant.support 'Assistant Enabled' -bool false"
  },
  {
    "id": "mac-110",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable Siri voice feedback",
    "description": "Disable Siri voice feedback",
    "code": "defaults write com.apple.assistant.backedup 'Use device speaker for TTS' -int 3"
  },
  {
    "id": "mac-111",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable Siri services (Siri and assistantd)",
    "description": "Disable Siri services (Siri and assistantd)",
    "code": "launchctl disable \"user/$UID/com.apple.assistantd\"\nlaunchctl disable \"gui/$UID/com.apple.assistantd\"\nsudo launchctl disable 'system/com.apple.assistantd'\nlaunchctl disable \"user/$UID/com.apple.Siri.agent\"\nlaunchctl disable \"gui/$UID/com.apple.Siri.agent\"\nsudo launchctl disable 'system/com.apple.Siri.agent'\nif [ $(/usr/bin/csrutil status | awk '/status/ {print $5}' | sed 's/\\.$//') = \"enabled\" ]; then\n    >&2 echo 'This script requires SIP to be disabled. Read more: https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection'\nfi"
  },
  {
    "id": "mac-112",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable \"Do you want to enable Siri?\" pop-up",
    "description": "Disable \"Do you want to enable Siri?\" pop-up",
    "code": "defaults write com.apple.SetupAssistant 'DidSeeSiriSetup' -bool True"
  },
  {
    "id": "mac-113",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Remove Siri from menu bar",
    "description": "Remove Siri from menu bar",
    "code": "defaults write com.apple.systemuiserver 'NSStatusItem Visible Siri' 0"
  },
  {
    "id": "mac-114",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Remove Siri from status menu",
    "description": "Remove Siri from status menu",
    "code": "defaults write com.apple.Siri 'StatusMenuVisible' -bool false\ndefaults write com.apple.Siri 'UserHasDeclinedEnable' -bool true"
  },
  {
    "id": "mac-115",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Enable application firewall",
    "description": "Enable application firewall",
    "code": "/usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on\nsudo defaults write /Library/Preferences/com.apple.alf globalstate -bool true\ndefaults write com.apple.security.firewall EnableFirewall -bool true"
  },
  {
    "id": "mac-116",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Enable firewall logging",
    "description": "Enable firewall logging",
    "code": "/usr/libexec/ApplicationFirewall/socketfilterfw --setloggingmode on\nsudo defaults write /Library/Preferences/com.apple.alf loggingenabled -bool true"
  },
  {
    "id": "mac-117",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Enable stealth mode",
    "description": "Enable stealth mode",
    "code": "/usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on\nsudo defaults write /Library/Preferences/com.apple.alf stealthenabled -bool true\ndefaults write com.apple.security.firewall EnableStealthMode -bool true"
  },
  {
    "id": "mac-118",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Enable password requirement for waking from sleep or screen saver",
    "description": "Enable password requirement for waking from sleep or screen saver",
    "code": "sudo defaults write /Library/Preferences/com.apple.screensaver askForPassword -bool true"
  },
  {
    "id": "mac-119",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Enable session lock five seconds after screen saver initiation",
    "description": "Enable session lock five seconds after screen saver initiation",
    "code": "sudo defaults write /Library/Preferences/com.apple.screensaver 'askForPasswordDelay' -int 5"
  },
  {
    "id": "mac-120",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable guest account login",
    "description": "Disable guest account login",
    "code": "sudo defaults write '/Library/Preferences/com.apple.loginwindow' 'GuestEnabled' -bool NO\nif ! command -v 'sysadminctl' &> /dev/null; then\n    echo 'Skipping because \"sysadminctl\" is not found.'\nelse\n    sudo sysadminctl -guestAccount off\nfi"
  },
  {
    "id": "mac-121",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable guest file sharing over SMB",
    "description": "Disable guest file sharing over SMB",
    "code": "sudo defaults write '/Library/Preferences/SystemConfiguration/com.apple.smb.server' 'AllowGuestAccess' -bool NO\nif ! command -v 'sysadminctl' &> /dev/null; then\n    echo 'Skipping because \"sysadminctl\" is not found.'\nelse\n    sudo sysadminctl -smbGuestAccess off\nfi"
  },
  {
    "id": "mac-122",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable guest file sharing over AFP",
    "description": "Disable guest file sharing over AFP",
    "code": "sudo defaults write '/Library/Preferences/com.apple.AppleFileServer' 'guestAccess' -bool NO\nif ! command -v 'sysadminctl' &> /dev/null; then\n    echo 'Skipping because \"sysadminctl\" is not found.'\nelse\n    sudo sysadminctl -afpGuestAccess off\nfi\nsudo killall -HUP AppleFileServer"
  },
  {
    "id": "mac-123",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable incoming SSH and SFTP remote logins",
    "description": "Disable incoming SSH and SFTP remote logins",
    "code": "echo 'yes' | sudo systemsetup -setremotelogin off"
  },
  {
    "id": "mac-124",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable the insecure TFTP service",
    "description": "Disable the insecure TFTP service",
    "code": "sudo launchctl disable 'system/com.apple.tftpd'"
  },
  {
    "id": "mac-125",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable Bonjour multicast advertising",
    "description": "Disable Bonjour multicast advertising",
    "code": "sudo defaults write /Library/Preferences/com.apple.mDNSResponder.plist NoMulticastAdvertisements -bool true"
  },
  {
    "id": "mac-126",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable insecure telnet protocol",
    "description": "Disable insecure telnet protocol",
    "code": "sudo launchctl disable system/com.apple.telnetd"
  },
  {
    "id": "mac-127",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable local printer sharing with other computers",
    "description": "Disable local printer sharing with other computers",
    "code": "cupsctl --no-share-printers"
  },
  {
    "id": "mac-128",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable printing from external addresses, including the internet",
    "description": "Disable printing from external addresses, including the internet",
    "code": "cupsctl --no-remote-any"
  },
  {
    "id": "mac-129",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable remote printer administration",
    "description": "Disable remote printer administration",
    "code": "cupsctl --no-remote-admin"
  },
  {
    "id": "mac-130",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable automatic incoming connections for signed apps",
    "description": "Disable automatic incoming connections for signed apps",
    "code": "sudo defaults write /Library/Preferences/com.apple.alf allowsignedenabled -bool false"
  },
  {
    "id": "mac-131",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable automatic incoming connections for downloaded signed apps",
    "description": "Disable automatic incoming connections for downloaded signed apps",
    "code": "sudo defaults write /Library/Preferences/com.apple.alf allowdownloadsignedenabled -bool false"
  },
  {
    "id": "mac-132",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable Gatekeeper's automatic reactivation",
    "description": "Disable Gatekeeper's automatic reactivation",
    "code": "sudo defaults write /Library/Preferences/com.apple.security GKAutoRearm -bool true"
  },
  {
    "id": "mac-133",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-over-security",
    "name": "Disable Gatekeeper",
    "description": "Disable Gatekeeper",
    "code": "os_major_ver=$(sw_vers -productVersion | awk -F \".\" '{print $1}')\nos_minor_ver=$(sw_vers -productVersion | awk -F \".\" '{print $2}')\nif [[ $os_major_ver -le 10 \\\n        || ( $os_major_ver -eq 10 && $os_minor_ver -lt 7 ) \\\n    ]]; then\n    echo \"No action needed, Gatekeeper is not available this OS version\"\nelse\n    gatekeeper_status=\"$(spctl --status | awk '/assessments/ {print $2}')\"\n    if [ $gatekeeper_status = \"disabled\" ]; then\n        echo \"No action needed, Gatekeeper is already disabled\"\n    elif [ $gatekeeper_status = \"enabled\" ]; then\n        sudo spctl --master-disable\n        sudo defaults write '/var/db/SystemPolicy-prefs' 'enabled' -string 'no'\n        echo \"Disabled Gatekeeper\"\n    else\n        >&2 echo \"Unknown gatekeeper status: $gatekeeper_status\"\n    fi\nfi"
  },
  {
    "id": "mac-134",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic checks for updates",
    "description": "Disable automatic checks for updates",
    "code": "sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'AutomaticCheckEnabled' -bool false"
  },
  {
    "id": "mac-135",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic downloads for updates",
    "description": "Disable automatic downloads for updates",
    "code": "sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'AutomaticDownload' -bool false"
  },
  {
    "id": "mac-136",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic installation of macOS updates",
    "description": "Disable automatic installation of macOS updates",
    "code": "sudo defaults write /Library/Preferences/com.apple.commerce 'AutoUpdateRestartRequired' -bool false\nsudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'AutomaticallyInstallMacOSUpdates' -bool false"
  },
  {
    "id": "mac-137",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic app updates from the App Store",
    "description": "Disable automatic app updates from the App Store",
    "code": "sudo defaults write /Library/Preferences/com.apple.commerce 'AutoUpdate' -bool false\nsudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'AutomaticallyInstallAppUpdates' -bool false"
  },
  {
    "id": "mac-138",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable macOS beta release installation",
    "description": "Disable macOS beta release installation",
    "code": "sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'AllowPreReleaseInstallation' -bool false"
  },
  {
    "id": "mac-139",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic installation for configuration data (e.g. XProtect, Gatekeeper, MRT)",
    "description": "Disable automatic installation for configuration data (e.g. XProtect, Gatekeeper, MRT)",
    "code": "sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'ConfigDataInstall' -bool false"
  },
  {
    "id": "mac-140",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable automatic installation for system data files and security updates",
    "description": "Disable automatic installation for system data files and security updates",
    "code": "sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate 'CriticalUpdateInstall' -bool false"
  },
  {
    "id": "mac-141",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear logs of all downloaded files from File Quarantine",
    "description": "Clear logs of all downloaded files from File Quarantine",
    "code": "db_file=~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV2\ndb_query='delete from LSQuarantineEvent'\nif [ -f \"$db_file\" ]; then\n    echo \"Database exists at \\\"$db_file\\\"\"\n    if ls -lO \"$db_file\" | grep --silent 'schg'; then\n        sudo chflags noschg \"$db_file\"\n        echo \"Found and removed system immutable flag\"\n        has_system_immutable_flag=true\n    fi\n    if ls -lO \"$db_file\" | grep --silent 'uchg'; then\n        sudo chflags nouchg \"$db_file\"\n        echo \"Found and removed user immutable flag\"\n        has_user_immutable_flag=true\n    fi\n    sqlite3 \"$db_file\" \"$db_query\"\n    echo \"Executed the query \\\"$db_query\\\"\"\n    if [ \"$has_system_immutable_flag\" = true ] ; then\n        sudo chflags schg \"$db_file\"\n        echo \"Added system immutable flag back\"\n    fi\n    if [ \"$has_user_immutable_flag\" = true ] ; then\n        sudo chflags uchg \"$db_file\"\n        echo \"Added user immutable flag back\"\n    fi\nelse\n    echo \"No action needed, database does not exist at \\\"$db_file\\\"\"\nfi"
  },
  {
    "id": "mac-142",
    "categoryId": "mac",
    "subCategoryId": "mac-privacy-cleanup",
    "name": "Clear File Quarantine attribute from downloaded files",
    "description": "Clear File Quarantine attribute from downloaded files",
    "code": "find ~/Downloads        \\\n        -type f         \\\n        -exec           \\\n            sh -c       \\\n                '\n                    attr=\"com.apple.quarantine\"\n                    file=\"{}\"\n                    if [[ $(xattr \"$file\") = *$attr* ]]; then\n                        if xattr -d \"$attr\" \"$file\" 2>/dev/null; then\n                            echo \"🧹 Cleaned attribute from \\\"$file\\\"\"\n                        else\n                            >&2 echo \"❌ Failed to clean attribute from \\\"$file\\\"\"\n                        fi\n                    else\n                        echo \"No attribute in \\\"$file\\\"\"\n                    fi\n                '       \\\n            {} \\;"
  },
  {
    "id": "mac-143",
    "categoryId": "mac",
    "subCategoryId": "mac-security-improvements",
    "name": "Disable downloaded file logging in quarantine",
    "description": "Disable downloaded file logging in quarantine",
    "code": "file_to_lock=~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV2\nif [ -f \"$file_to_lock\" ]; then\n    sudo chflags schg \"$file_to_lock\"\n    echo \"Made file immutable at \\\"$file_to_lock\\\"\"\nelse\n    echo \"No action is needed, file does not exist at \\\"$file_to_lock\\\"\"\nfi"
  },
  {
    "id": "mac-144",
    "categoryId": "mac",
    "subCategoryId": "mac-configure-os",
    "name": "Disable extended quarantine attribute for downloaded files (disables warning)",
    "description": "Disable extended quarantine attribute for downloaded files (disables warning)",
    "code": "sudo defaults write com.apple.LaunchServices 'LSQuarantine' -bool NO"
  },
  {
    "id": "linux-1",
    "categoryId": "linux",
    "subCategoryId": "linux-configure-programs",
    "name": "Harden SSH Configuration",
    "description": "Strengthens SSH security by disabling root login and password authentication.",
    "code": "# Harden SSH config (edit /etc/ssh/sshd_config)\n# Ensure these lines are present and uncommented:\n# PermitRootLogin no\n# PasswordAuthentication no\necho \"Remember to manually edit /etc/ssh/sshd_config and restart sshd.\""
  },
  {
    "id": "linux-2",
    "categoryId": "linux",
    "subCategoryId": "linux-configure-programs",
    "name": "Install and Configure UFW",
    "description": "Sets up Uncomplicated Firewall (UFW) to block incoming connections by default.",
    "code": "# Install UFW on Debian/Ubuntu\nsudo apt-get update\nsudo apt-get install ufw -y\n# Basic setup\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw enable\necho \"UFW firewall is now enabled.\""
  },
  {
    "id": "browser-1",
    "categoryId": "browser",
    "name": "Clear Browser Cache",
    "description": "A general reminder and placeholder for scripts that would clear browser data.",
    "code": "# This is a placeholder. Clearing browser data is typically done in browser settings.\n# For Firefox on Linux, you could do:\n# rm -rf ~/.cache/mozilla/firefox/*\necho \"Action required: Clear cache and cookies in your browser settings.\""
  },
  {
    "id": "browser-2",
    "categoryId": "browser",
    "name": "Disable WebRTC IP Leak",
    "description": "Suggests using an extension like uBlock Origin to prevent IP address leaks via WebRTC.",
    "code": "# Action required: Install a browser extension like uBlock Origin or WebRTC Leak Prevent.\n# In uBlock Origin settings, check \"Prevent WebRTC from leaking local IP addresses.\"\necho \"Install a browser extension to prevent WebRTC leaks.\""
  },
  {
    "name": "Clean Bash history",
    "description": "Bash (Bourne-Again SHell) is from the GNU project. It is used by most distributions as their default shell.",
    "code": "#!/usr/bin/env bash\n# https://privacy.sexy — v0.13.8 — Wed, 29 Oct 2025 11:55:26 GMT\nif [ \"$EUID\" -ne 0 ]; then\n  script_path=$([[ \"$0\" = /* ]] && echo \"$0\" || echo \"$PWD/${0#./}\")\n  sudo \"$script_path\" || (\n    echo 'Administrator privileges are required.'\n    exit 1\n  )\n  exit 0\nfi\nexport HOME=\"/home/${SUDO_USER:-${USER}}\" # Keep `~` and `$HOME` for user not `/root`.\n\n\n# ----------------------------------------------------------\n# --------------------Clear bash history--------------------\n# ----------------------------------------------------------\necho '--- Clear bash history'\nrm -fv ~/.bash_history\nsudo rm -fv /root/.bash_history\n# ----------------------------------------------------------\n\n\necho 'Your privacy and security is now hardened 🎉💪'\necho 'Press any key to exit.'\nread -n 1 -s",
    "categoryId": "linux",
    "subCategoryId": "linux-privacy-cleanup",
    "id": "custom-1761739057636"
  },
  {
    "name": "TOOLS BOOKS",
    "description": "d",
    "code": "https://privacy.xocode.info/",
    "categoryId": "win",
    "subCategoryId": "win-ui-for-privacy",
    "id": "custom-1761751948383"
  },
  {
    "name": "TOOLS BOOKS",
    "description": "z",
    "code": "z",
    "categoryId": "linux",
    "subCategoryId": "linux-privacy-cleanup",
    "id": "custom-1761752109504"
  }
];