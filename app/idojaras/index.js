

    let varosnevInput = $('#varosnev');
    let keresogomb = $('#keresogomb');

    keresogomb.click(() => {
      adatLekeres(varosnevInput.val());
  });

    console.log(varosnevInput);
  
    const apiKey = '2e5dfd40bba255b0f836d34b2e35f6f9';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

  
    async function adatLekeres(varosnevInput) {
      
      try {
        const valasz = await fetch(apiUrl + varosnevInput + '&appid=' + apiKey );
        const adat = await valasz.json();
  
        $('.varos').text(adat.name);
        $('.homerseklet').text(Math.floor(adat.main.temp) + "°C");
        $('.paramennyiseg').text(Math.floor(adat.main.humidity));
        $('.szel').text(Math.floor(adat.wind.speed) + "km/óra");

    if( adat.weather[0].main == "Clouds") {
    $('#idojarasikon').attr('class', 'fa-solid fa-cloud');
    $('body').css('background-image', 'url(images/hatter/felhos.jpg)');
  }
    else if (adat.weather[0].main == "Clear") {
      $('#idojarasikon').attr('class', 'fa-solid fa-cloud-sun');
      $('body').css('background-image', 'url(images/hatter/napos.jpg)');
    } 
      else if (adat.weather[0].main == "Rain") {
      $('#idojarasikon').attr('class', 'fa-solid fa-cloud-rain');
      $('body').css('background-image', 'url(images/hatter/esos.jpg)');
    }
    else if (adat.weather[0].main == "Snow") {
      $('#idojarasikon').attr('class', 'fa-solid fa-snowflake');
      $('body').css('background-image', 'url(images/hatter/havas.jpg)');
    }


        console.log(adat);
      } catch (error) {
        console.error('Hiba történt az adatok lekérése során:', error);
      }


    }
  
adatLekeres('budapest');

  