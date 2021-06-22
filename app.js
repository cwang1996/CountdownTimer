const countdown_div = () => {
    const countDate = new Date('December 31, 2021, 00:00:00').getTime();
    const nowTime = new Date().getTime();
    const gapTime = countDate - nowTime;

    const secondTime = 1000;
    const minuteTime = secondTime * 60;
    const hourTime = minuteTime * 60;
    const dayTime = hourTime * 24;

    //Calculate
    const textDay = Math.floor(gapTime / dayTime);  
    const textHour = Math.floor((gapTime % dayTime) / hourTime);
    const textMinute = Math.floor((gapTime % hourTime) / minuteTime);
    const textSecond = Math.floor((gapTime %minuteTime) / secondTime);   

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;
};

setInterval(countdown_div,1000);