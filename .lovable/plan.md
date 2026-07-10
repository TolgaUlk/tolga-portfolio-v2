

# Password-Protected Videos for Select Projects

## Overview
Add a password gate to videos in 6 specific portfolio detail pages. When a user clicks play on a video, a password dialog appears. They must type `youshallpass` to unlock and play the video. Once unlocked per project, all videos on that page play freely.

## Projects Affected
- HBO Max (id: 1)
- Harry Potter (id: 11)
- Edeka Robot (id: 2)
- Klarna (id: 3)
- Prime Video / Apache (id: 5)
- Wolt (id: 8)

## Implementation

### 1. Create `PasswordGate` component
**New file: `src/components/Portfolio/PasswordGate.tsx`**

A reusable dialog/overlay component:
- Shows a minimal, styled password input overlay when triggered
- Accepts input and checks against hardcoded password `youshallpass`
- On success: calls `onUnlock` callback; on failure: shows error shake/message
- Clean design consistent with the portfolio aesthetic (dark overlay, centered input)

### 2. Create `ProtectedVideo` wrapper component
**New file: `src/components/Portfolio/ProtectedVideo.tsx`**

Wraps any `<video>` element:
- Accepts all standard video props plus `isUnlocked` and `onRequestUnlock`
- When locked: renders video poster/thumbnail with a lock icon play button overlay
- When user clicks: triggers the password gate instead of playing
- When unlocked: renders normal video with controls

### 3. Update `PortfolioDetail.tsx`
- Add `isUnlocked` state per project visit (single unlock unlocks all videos on that page)
- Add `showPasswordDialog` state
- For the 6 listed project IDs, wrap interactive videos (ones with `controls`) in `ProtectedVideo`
- Auto-playing muted background/loop videos remain unaffected
- Show `PasswordGate` dialog when password is requested

### Technical Details
- Password is checked client-side (simple string comparison) -- this is a soft gate, not security-critical
- Unlock state is stored in React state (resets on page reload/navigation, which is appropriate for portfolio protection)
- The password dialog uses the existing shadcn Dialog component for consistency
- Protected project IDs stored as a constant array: `[1, 2, 3, 5, 8, 11]`

