import {writeFileSync} from 'fs'
import {compileFromFile} from 'json-schema-to-typescript'

async function generate() {
  writeFileSync('workflow.ts', await compileFromFile('./schema/workflow.json',
      {cwd: './schema/'} ))
}
generate()
