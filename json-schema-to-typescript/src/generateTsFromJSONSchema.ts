import {writeFileSync} from 'fs'
import {compileFromFile} from 'json-schema-to-typescript'

async function generate() {
    try {

        writeFileSync('./src/workflow.ts',
            await compileFromFile('./src/schema/workflow.json',
                {cwd: './src/schema/'})
        )
    } catch (error) {
        console.log(error);
    }
}

generate()
