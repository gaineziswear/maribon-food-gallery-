import { cp, mkdir, rm } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })
await cp('index.html', 'dist/index.html')
await cp('src', 'dist/src', { recursive: true, filter: source => !source.endsWith('.test.js') && !source.endsWith('.jsx') })
console.log('Static production build created in dist/')
