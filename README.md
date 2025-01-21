# Next.js router.push() race condition

This repository demonstrates a common issue in Next.js applications where the `router.push()` method doesn't wait for navigation to complete before executing subsequent code. This can lead to race conditions and unexpected behavior.  The solution shows how to properly handle this using promises or `router.events`.

## Problem

The `router.push()` method in Next.js is asynchronous, but it doesn't provide a direct way to wait for navigation to finish. If you have code that relies on the navigation being complete (e.g., updating UI elements based on the new route), it might run before the navigation is actually finished.