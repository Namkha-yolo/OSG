import fs from "fs";
import path from "path";
import { type Express } from "express";
import { type ViteDevServer, createServer as createViteServer } from "vite";
import { type Server } from "http";
import express from "express";

export function log(message: string, source = "express") {
  const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });
  console.log(`${timestamp} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
    clearScreen: false,
    optimizeDeps: {
      include: ["wouter > use-sync-external-store"],
    },
  });

  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve("dist");
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}`,
    );
  }

  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}