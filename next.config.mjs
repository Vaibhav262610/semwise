import nextPWA from "next-pwa";

const withPWA = nextPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true, // Ensures the App Router is enabled
    },
};

export default withPWA(nextConfig);
