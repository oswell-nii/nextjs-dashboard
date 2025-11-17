// This file links the NextAuth configuration in auth.ts to the necessary API endpoints.

// Import the handlers exported from your main authentication configuration file.
// The NextAuth library uses these to process requests for sign-in, sign-out, etc.
import { handlers } from '@/auth'; 

// Export the GET and POST methods, which are required for NextAuth's internal API.
export const { GET, POST } = handlers;