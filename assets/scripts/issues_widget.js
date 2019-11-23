//Define list of "problems"
let problems = [
    {
        location: {
            lat: 56.653803,
            lng: 23.757899,
            address: 'Cukurfabrikas stacija'
        },
        title: 'Kāds aizdedzina miskasti pie Cukurfabrikas stacijas.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque nulla, pretium a lorem vel, vestibulum vehicula lectus. Nulla diam dui, rutrum sed placerat et, semper vitae dolor. Praesent vitae ex orci. Duis dolor libero, pellentesque non volutpat a, feugiat non turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam non commodo lectus. Vivamus vitae lorem massa. Sed lacus ante, ullamcorper ac risus id, hendrerit volutpat diam. Duis ac dolor massa. Mauris sit amet dolor ac augue dapibus mollis eget sit amet lectus. Phasellus dictum metus ligula, a consequat est fringilla id.',
        image_src: './img/issues/burning_trash.jpeg',
    },
    {
        location: {
            lat: 56.688390,
            lng: 23.853997,
            address: 'Cenu pagasts'
        },
        title: 'Nolocīta apdzīvotas vietas zīme',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque nulla, pretium a lorem vel, vestibulum vehicula lectus. Nulla diam dui, rutrum sed placerat et, semper vitae dolor. Praesent vitae ex orci. Duis dolor libero, pellentesque non volutpat a, feugiat non turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam non commodo lectus. Vivamus vitae lorem massa. Sed lacus ante, ullamcorper ac risus id, hendrerit volutpat diam. Duis ac dolor massa. Mauris sit amet dolor ac augue dapibus mollis eget sit amet lectus. Phasellus dictum metus ligula, a consequat est fringilla id.',
        image_src: './img/issues/broken_sign.jpeg',
    },
    {
        location: {
            lat: 56.655153,
            lng: 23.752194,
            address: 'Garozas iela 26-30'
        },
        title: 'Pārāk maz vietas, kur atstāt automobili blakus ēkā dzīvojošajiem.',
        description: 'Šajā ielas daļā bieži notiek negadījumi saistībā ar to, ka šeit pie krustojuma noparkojoties kādam, tiek aprobežota ielas pārskatāmība braucot ārā no dzīvokļa pagalma.',
        image_src: './img/issues/awful_parking_space.jpeg',
    },
    {
        location: {
            lat: 56.641816,
            lng: 23.733104,
            address: 'Stacija "Jelgava"'
        },
        title: 'Šausmīga stāvvieta.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque nulla, pretium a lorem vel, vestibulum vehicula lectus. Nulla diam dui, rutrum sed placerat et, semper vitae dolor. Praesent vitae ex orci. Duis dolor libero, pellentesque non volutpat a, feugiat non turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam non commodo lectus. Vivamus vitae lorem massa. Sed lacus ante, ullamcorper ac risus id, hendrerit volutpat diam. Duis ac dolor massa. Mauris sit amet dolor ac augue dapibus mollis eget sit amet lectus. Phasellus dictum metus ligula, a consequat est fringilla id.',
        image_src: './img/issues/awful_train_station_parking.jpeg',
    },
];

//Initialize leaflet maps widget
let access_token = 'pk.eyJ1IjoiZmlyZW45OSIsImEiOiJjazNiZG5zbTMwbDMwM2tuM3pvYjd6amt0In0.6RJEcQsMFNFBwD3w8Dhtvg';
let mymap = L.map('problem_map').setView([56.656465, 23.779509], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: access_token
}).addTo(mymap);

//Initialize modal
let $issueInfoModal = $('#issue_info_modal');

function openModal(problem){
    $issueInfoModal.modal("show");

    $issueInfoModal.find('[data-issue-info="title"]').html(problem.title);
    $issueInfoModal.find('[data-issue-info="desc"]').html(problem.description);
    $issueInfoModal.find('[data-issue-info="img"]').attr('src', problem.image_src);
}

//Add problem markers to map widget
let markers = [];
problems.map((problem, index) => {
    var marker = L.marker([problem.location.lat, problem.location.lng], {
        title: problem.title,
    }).addTo(mymap).on('click', (e) => {
        openModal(problem);
    });
    markers.push(marker);
});

