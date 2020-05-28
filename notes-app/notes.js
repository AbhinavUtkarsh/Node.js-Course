const fs = require('fs')
const chalk = require("chalk")
//const getNotes = () => { "Your notes" }

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        writeNotes(notes)
        console.log(chalk.green.inverse("Your note titled: " + chalk.white.inverse(title) + " was added"));
    }
    else {
        console.log(chalk.blue.inverse("Note titled: " + chalk.white.inverse(title) + " already exists"));
        console.log(duplicateNotes);
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title !== title)
    if (remainingNotes.length === notes.length) {
        console.log(chalk.red.inverse("The note titled: " + chalk.white.inverse(title) + " was not found"));
    } else {
        writeNotes(remainingNotes)
        console.log(chalk.green.inverse("The note titled: " + chalk.white.inverse(title) + " was deleted"));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green("\n Your Notes \n"));
    notes.forEach((note) => console.log(chalk.white.inverse(note.title + " : ") + chalk.yellow.inverse(note.body)));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const readNote = (title) => {
    const notes = loadNotes()
    const ifExists = notes.find((note) => note.title === title)
    if (ifExists === undefined) {
        console.log(chalk.red.inverse("The note titled: " + chalk.white.inverse(title) + " was not found"));
    } else {
        console.log(chalk.white.inverse(ifExists.title + " : ") + chalk.yellow.inverse(ifExists.body))
    }

}

const writeNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}