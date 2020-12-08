<template>
<div>
    <div v-if="this.$root.$data.score != null" class="score">
        <div class="heading">
            <h3>Previous Test Results:</h3>
        </div>
        <div class="testGrid">
        <div class="item">
            <p>total score: {{this.$root.$data.score.total}}</p>
        </div>
        <div class="item">
            <p>overall average: {{this.$root.$data.score.average}}</p>
        </div>
        
        <div class="item">
            <p>recommended to work on: {{this.$root.$data.score.lowest}}</p>
        </div>
        </div>
    </div>
    <div class="content">
    <h2>Faith in Jesus Christ</h2>

    <p>When you have faith in Christ, you believe in Him as the Son of God, the Only Begotten of the Father in the flesh. You accept Him as your Savior and Redeemer and follow His teachings. You believe that your sins can be forgiven through His Atonement. Faith in Him means that you trust Him and are confident that He loves you.\n

Faith leads to action, including repentance, obedience, and dedicated service. When you have faith in Jesus Christ, you trust the Lord enough to follow His commandments—even when you do not completely understand the reasons for them. You accomplish what the Lord wants you to accomplish. You help bring about good in your own life and the lives of others. You are able to do miracles according to the Lord’s will. Your faith will be manifest through diligence and work.

Faith is a principle of power. God works by power, but His power is usually exercised in response to faith (see Moroni 10:7). He works according to the faith of His children. Doubt and fear are opposed to faith.

Your faith will increase through diligent study, prayer, dedicated service, and obedience to the promptings of the Holy Ghost and the commandments.

Your faith in Jesus Christ grows as you become better acquainted with Him and His teachings. As you explore the scriptures and search them, you learn of His ways, His love for all people, and His commandments.

Faith includes confidence in the mission and power of the Holy Ghost. Through faith you receive answers to your prayers and personal inspiration to guide you in the Lord’s work.</p>
    </div>
<div class="study">
    <div class="head">Scripture Study</div>
    <div class="subHead">How do you obtain faith, and what can you do through faith?</div>
<div class="grid">
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/25.29?lang=eng#p29" class="item">2 Nephi 25:29</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=eng" class="item">Alma 32</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.33?lang=eng#p33" class="item">Moroni 7:33</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26.13?lang=eng#p13" class="item">2 Nephi 26:13</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/15.7-8?lang=eng#p7" class="item">Helaman 15:7–8</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/nt/rom/10.17?lang=eng#p17" class="item">Romans 10:17</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.6-12?lang=eng#p6" class="item">Mosiah 4:6–12</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12.7-22?lang=eng#p7" class="item">Ether 12:7–22</a>
    <a href="https://www.churchofjesuschrist.org/study/scriptures/nt/heb/11?lang=eng" class="item">Hebrews 11</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style>
.grid{
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
}
.item{
    padding: 20px;
    font-size: 16px;
    text-align: center;
}

.testGrid{
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
}

.head{
    font-size: 24px;
    text-align: center;
}

.heading{
    text-align: center;
}
.content{
    padding: 15px;
}
.score{
    width:100%
}
table{
    width:100%
}
</style>