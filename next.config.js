const withPWAInit = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const path = require("path");
const isDev = process.env.NODE_ENV !== "production";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  exclude: [
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "fastly.picsum.photos", protocol: "https" }],
  },
  webpack(config) {
    if (!isDev) {
      // pwa config
      const registerJs = path.join(
        path.dirname(require.resolve("next-pwa")),
        "register.js"
      );
      const entry = config.entry;

      config.entry = () =>
        entry().then((entries) => {
          if (
            entries["main-app"] &&
            !entries["main-app"].includes(registerJs)
          ) {
            if (Array.isArray(entries["main-app"])) {
              entries["main-app"].unshift(registerJs);
            } else if (typeof entries["main-app"] === "string") {
              entries["main-app"] = [registerJs, entries["main-app"]];
            }
          }
          return entries;
        });
    }

    // svg config
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = isDev ? nextConfig : withPWA(nextConfig);
