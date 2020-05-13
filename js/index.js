function mySkills(event) {

  let containerSkills = document.querySelector('.container-skills')

  if(event) {
    containerSkills.style.display = 'flex'
  }

}

function mySkillsOver(event) {

  let containerSkills = document.querySelector('.container-skills')

  if(event) {
    containerSkills.style.display = 'none'
  }

}