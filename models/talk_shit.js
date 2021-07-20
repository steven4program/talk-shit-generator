const content = require('../content.json')

function randomPick(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateTalkShit(pick) {
  if (!pick) {
    return `Please pick up one option!`
  }
  return `身為一個${content.jobs[pick].title}，${randomPick(
    content.jobs[pick].task
  )}，${randomPick(content.phrase)}吧？`
}

module.exports = generateTalkShit
