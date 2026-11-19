import * as fs from 'node:fs';
import * as path from 'node:path';

import FrontPage from '@root/components/front/FrontPage';
import { listAssets, type AssetMap } from '@root/components/front/inventory';
import { frontPage, washes } from '@root/content/front-page';
import { readingList } from '@root/content/reading-list';

// Checked when the page is built (and on every request in dev), so a slot
// whose file is missing renders as an empty plate instead of a broken image.
function assetMap(): AssetMap {
  const map: AssetMap = {};
  for (const a of listAssets(frontPage, washes, readingList)) {
    map[a.path] = fs.existsSync(path.join(process.cwd(), 'public', a.path));
  }
  return map;
}

export default function Home() {
  return <FrontPage content={frontPage} books={readingList} washes={washes} assets={assetMap()} />;
}
