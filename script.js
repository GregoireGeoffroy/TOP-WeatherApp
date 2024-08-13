// Giphy API key : kuWVJypKKh14TSGyiUpCfnjhUldNPZDN



fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=KGK3U8EUGUP5LXBAT2NRZJ5LB', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.currentConditions.temp);
    })
