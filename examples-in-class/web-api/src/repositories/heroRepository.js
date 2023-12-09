import {
  readFile,
  writeFile
} from 'node:fs/promises'

export default class HeroRepository {
  constructor({
    file
  }) {
    this.file = file
  }

  async #currentFileContent() {
    return JSON.parse(await readFile(this.file))
  }

  find(){
    return this.#currentFileContent()
  }

  async create(data) {
    const currentFile = await this.#currentFileContent()
    currentFile.push(data)

    await writeFile(
      this.file,
      JSON.stringify(currentFile)
    )

    return data.id
  }

  async update(id, data){
    const currentFile = await this.#currentFileContent()
    const currentRegister = currentFile.find(id)
    const updatedRegister = currentRegister.update({
      
    })
  }

}
/*
const heroRepository = new HeroRepository({
  file: './../database/data.json'
})

console.log(
  await heroRepository.create({
    id: 2,
    name: 'Chapolin'
  })
)
console.log(
  await heroRepository.find()
)

*/