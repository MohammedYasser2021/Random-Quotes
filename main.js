let randomBtn = document.querySelector('.random')
let sideKickContainer = document.querySelector('.container')
let i = 0
randomBtn.addEventListener('click', () => {
  let qoutesArr = [
    'دع ابتسامتك تغير العالم ولا تدع العالم يغير ابتسامتك &#128525;',
    'جوهرك دائما أقوى من الظروف التي تمر بها.&#128526;',
    'لا تحكم على مساري إذا لم تكن قد مشيت رحلتي.&#128536;',
    'أنا لست هنا لكي اتناسب مع عالمك ، أنا هنا لأصنع عالمي&#128527;',
    'الروح المتعاطفة هي روح خاضت الألم الهائل&#128153;',
    'سامح الآخرين، ليس لأنهم يستحقون ذلك، بل لأنك تستحق السلام.&#128170;',
    'اليوم، للحظة واحدة، اخرح الى الخارج ، قف في صمت، انظر الى السماء وفكر في مدى روعة الحياة&#128541;',
    'حتى بعد ألف سنة، هذه الكلمات ستصل إلى الّذين يجب ان تصل لهم.&#128073;',
  ]

  sideKickContainer.innerHTML = `<blockquote class="sidekick" dir="rtl" lang="ar">
  ${qoutesArr[i]} 
  <br />
  <cite> محمد ياسر</cite>
</blockquote>`
  i++
  if (i === qoutesArr.length) {
    i = 0
  }
})
