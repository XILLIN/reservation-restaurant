import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'app/[locale]/admin/login/page.tsx',
  'components/admin-login.tsx',
  'app/[locale]/admin/(dashboard)/layout.tsx',
  'components/admin/sidebar.tsx',
  'app/[locale]/admin/(dashboard)/page.tsx',
  'components/admin/dashboard-overview.tsx',
  'app/[locale]/admin/(dashboard)/reservations/page.tsx',
  'components/admin/reservations-manager.tsx',
  'app/[locale]/admin/(dashboard)/tables/page.tsx',
  'components/admin/tables-manager.tsx',
  'app/[locale]/admin/(dashboard)/floor-plan/page.tsx',
  'components/admin/floor-plan.tsx'
];

function processFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filePath} - not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Backgrounds
  content = content.replace(/bg-stone-950/g, "bg-[#F7F7F5]"); // Soft warm background
  content = content.replace(/bg-stone-900\/50/g, "bg-white shadow-sm"); 
  content = content.replace(/bg-stone-900\/40/g, "bg-white shadow-sm"); 
  content = content.replace(/bg-stone-900/g, "bg-white");
  content = content.replace(/bg-stone-800\/50/g, "bg-stone-100");
  content = content.replace(/bg-stone-800/g, "bg-stone-100");
  content = content.replace(/bg-black\/40/g, "bg-stone-50");
  content = content.replace(/bg-black\/30/g, "bg-stone-50");
  content = content.replace(/bg-black\/20/g, "bg-stone-50");
  
  // Overlays
  content = content.replace(/bg-black\/50/g, "bg-stone-900/40"); // Keep modals darkish backdrop

  // Text colors
  content = content.replace(/text-white/g, "text-stone-900");
  content = content.replace(/text-stone-200/g, "text-stone-800");
  content = content.replace(/text-stone-300/g, "text-stone-700");
  
  // To avoid swapping 400 and 500, we change them sequentially to temporary tokens
  content = content.replace(/text-stone-400/g, "TEXT_TEMP_500");
  content = content.replace(/text-stone-500/g, "TEXT_TEMP_400");
  content = content.replace(/TEXT_TEMP_500/g, "text-stone-500"); // Make old 400 into 500
  content = content.replace(/TEXT_TEMP_400/g, "text-stone-400"); // Make old 500 into 400

  // Borders
  content = content.replace(/border-stone-800/g, "border-stone-200");
  content = content.replace(/border-stone-600/g, "border-stone-300");
  content = content.replace(/border-white\/5/g, "border-stone-200");
  content = content.replace(/border-white\/10/g, "border-stone-200");
  content = content.replace(/border-white\/20/g, "border-stone-300");

  // Inputs/Selects specific
  content = content.replace(/bg-stone-100 text-stone-900/g, "bg-stone-900 text-white"); // Invert login button
  content = content.replace(/hover:bg-white/g, "hover:bg-stone-800"); // Invert login button hover

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Processed ${filePath}`);
}

filesToProcess.forEach(processFile);
