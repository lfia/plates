// Full image overlay functionality
const imgOverlay = document.getElementById('imgOverlay');
const fullImage = document.getElementById('fullImg');
const closeImgOverlay = document.querySelector('#imgOverlay .close-btn');
function showFullImage(src, alt) {
    fullImage.src = src;
    fullImage.alt = alt;
    imgOverlay.style.display = 'flex';
}
// Close button functionality, also closes if user clicks outside the popup content
closeImgOverlay.onclick = () => {
    imgOverlay.style.display = 'none';
};
imgOverlay.onclick = (e) => {
    if (e.target === imgOverlay) {
        imgOverlay.style.display = 'none';
    }
};
// Info popup population
window.showPopup = function(locationData) {
    const overlay = document.getElementById('infoOverlay');
    const popupImg = document.getElementById('popupImg');
    const popupImg2 = document.getElementById('popupImg2');
    const popupLocation = document.getElementById('popupLocation');
    const popupTitle = document.getElementById('popupTitle');
    const popupDesc = document.getElementById('popupDesc');

    popupLocation.textContent = locationData.location;
    popupTitle.textContent = locationData.title;
    popupDesc.innerHTML = locationData.desc;
    popupImg.src = locationData.img;
    popupImg.alt = locationData.alt;
    popupImg2.src = locationData.img2;
    popupImg2.alt = locationData.alt2;

    popupImg.onclick = () => showFullImage(locationData.img, locationData.alt);
    popupImg2.onclick = () => showFullImage(locationData.img2, locationData.alt2);
    popupImg.style.cursor = 'pointer';
    popupImg2.style.cursor = 'pointer';

    overlay.style.display = 'flex';

    if (!locationData.img) {
        popupImg.style.display = 'none';
    } else {
        popupImg.style.display = 'flex';
    }
    if (!locationData.img2) {
        popupImg2.style.display = 'none';
    } else {
        popupImg2.style.display = 'flex';
    }
}
// Close button functionality, also closes if user clicks outside the popup content
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('infoOverlay').style.display = 'none';
});
document.getElementById('infoOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
// Info info data data 
const atlanticData = {
    location: 'Mid-Atlantic Ocean',
    title: 'The Mid-Atlantic Ridge',
    desc: 'The Mid-Atlantic Ridge is a divergent plate boundary located along the floor of the Atlantic Ocean. It is where the Eurasian and North American plates are moving apart in the northern hemisphere, and the African and South American plates are doing the same in the southern hemisphere. This rift is responsible for the creation of new oceanic crust and is characterized by volcanic activity and hydrothermal vents.<br><br>When the far edges of the plate move outward and subduct into the earth, it pulls on the crust at the boundary. This thins the crust, reducing pressure on rocks below, allowing it to melt, rise, and cool to form new crust.',
    img: 'img/midATL.png',
    alt: 'Topographic diagram of the Mid-Atlantic Ridge',
    img2: 'img/midATLdiagram.png',
    alt2: 'Diagram showing a divergent plate boundary like that at the Mid-Atlantic Ridge'
};
const marianaData = {
    location: 'Western Pacific Ocean, east of the Mariana Islands',
    title: 'The Mariana Trench',
    desc: 'The Mariana Trench is the deepest part of the oceans, reaching a maximum known depth of about 10,984 meters (36,037 feet) at the Challenger Deep. The trench itself is the deepest part of the boundary. The way it looks today is the result of 50 million years of the Pacific Plate subducting beneath the Mariana plate. trench is a site of extreme geological activity and is home to unique ecosystems adapted to its high-pressure environment.',
    img: 'img/mariana.jpg',
    alt: 'Aerial photograph of Pagan Island',
    img2: 'img/marianaDiagram.png',
    alt2: 'Diagram of the Mariana Trench showing the subduction process'
};
const africaData = {
    location: 'Eastern Africa',
    title: 'The African Rift Valley',
    desc: 'The African Rift Valley is a series of rift valleys that stretch from the Afar Triangle in Ethiopia down through Kenya, Tanzania, and into Mozambique. Here you can see the African continent literally splitting apart. It is a divergent tectonic plate boundary where the African Plate is splitting into two smaller plates, the Somali Plate and the Nubian Plate. This rifting process is responsible for the formation of deep valleys, volcanic activity, and the Great Lakes of Africa.',
    img: 'img/AfricaLake.jpg',
    alt: 'Lakes of the African Rift Valley',
    img2: 'img/AfricaRift.png',
    alt2: 'Diagram of the African Rift Valley showing the divergent plate boundary'
};
const pnwData = {
    location: 'Off the coast of the Pacific Northwest, USA',
    title: 'The Juan de Fuca Subduction Zone',
    desc: 'The Juan de Fuca subduction zone is a convergent plate boundary where the small Juan de Fuca Plate is being subducted beneath the North American Plate. This region is known for its potential to produce large earthquakes and tsunamis, as well as volcanic activity in the Cascade Range. The subduction process also contributes to the geological complexity of the Pacific Northwest.<br><br>As the Juan de Fuca plate descends into the earth, it is pulled by the principle of convection, where cold dense things sink and warm less dense things rise. When the frontmost portion of the plate detaches into the mantle, it causes the next portion of the plate to fill the empty space, pulling the rest of the plate with it. This is called slab pull and suction. <br><br>This is also what causes the Cascade mountain range. The subducting rock contains water, and as the water is driven off by increasing temperature and pressure, it reduces the melting point of the rocks above, causing some of the mantle to melt into magma. Since the magma is warmer than the surrounding rock, it rises through the mantle. Some of the magma will erupt through the surface, and some will cool and plant itself in the lithosphere, which lifts the surface by adding thickness and buoyancy.',
    img: 'img/JuanDeFucaCoast.jpg',
    alt: 'Coastline of the Pacific Northwest, USA',
    img2: 'img/CascadiaSubduction.png',
    alt2: 'Diagram of the Juan de Fuca subduction zone and its relation to the Pacific Northwest'
};
const californiaData = {
    location: 'California, USA',
    title: 'The San Andreas Fault',
    desc: 'The San Andreas Fault is a transform plate boundary that runs through California. It marks the boundary between the Pacific Plate and the North American Plate. The fault is known for its seismic activity, including the potential for large earthquakes. The movement along the San Andreas Fault has shaped much of the landscape of California and is a significant geological feature in the region.<br><br>The San Andreas is a strike-slip fault, where the Pacific plate slides northward and the North American plate slides southward. The boundary stretches roughly 1,300km (800 miles) through California, and moves about 33 to 37mm (1.3 to 1.5 inches) each year. However, the movement of the fault is not uniform throughout, some places move quicker than others and create tension that is released in earthquakes.',
    img: 'img/SAfault.gif',
    alt: 'Aerial view of the San Andreas Fault',
    img2: 'img/SAdiagram.png',
    alt2: 'Diagram of the San Andreas Fault showing the transform plate boundary'
};
const himData = {
    location: 'Himalayas, between India and China',
    title: 'The Himalayas',
    desc: 'The Himalayas are a mountain range formed by the collision of the Indian Plate with the Eurasian Plate. This convergent plate boundary has resulted in the uplift of the Himalayas, which include some of the highest peaks in the world, such as Mount Everest. As these plates collide the rock bends and deforms, and has nowhere to go but up, creating these mountains.',
    img: 'img/Everest.jpg',
    alt: 'Mount Everest, the highest peak in the Himalayas',
    img2: 'img/indiaCrash.gif',
    alt2: 'Diagram of the timeline of the Indian Plate and the Eurasian Plate that formed the Himalayas'
};

// header links
const about = {
    title: 'About this project',
    desc: 'This tool pinpoints a few interesting plate boundaries, and explains a bit more about them. You can click on any glowing blue dot to show information about that boundary. The dashed lines represent the boundaries of all tectonic plates.<br><br>This project was created as part of my dissertation for the University of Winchester. The goal was to create an interactive map using OpenStreetMap that highlights key tectonic plate boundaries and significant geological locations around the world. The map includes markers with popups that provide detailed information about each location, along with images to enhance the learning experience. It was made to supplement classroom learning, and is currently in a proof of concept stage.',
};
const credits = {
    title: 'Credits and Resources',
    desc: 'This project was coded, deployed, and written by S. Leatham.<br><br>The map was built using <a href="https://leafletjs.com/">Leaflet.js</a> and <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, and the tectonic plate boundary data was sourced from the <a href="https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json">PB2002 dataset.</a> The information in each popup was written by S. Leatham, adapted from her previous knowledge and <a href="https://unimailwinchesterac-my.sharepoint.com/:w:/g/personal/s_leatham_23_unimail_winchester_ac_uk/IQD7B2r4XHBKTqATj1GH5Na-AX2prMx4COVyvIABOCqGLvw?e=ACdCeo">various sources.</a><br><br>Image sources:<ul><li>Juan de Fuca:<ul><li><a href="https://commons.wikimedia.org/wiki/File:Strait_of_Juan_de_Fuca_Highway_-_SR_116_-_A_Lonely_Beach_Along_the_Strait_of_Juan_de_Fuca_Highway_-_NARA_-_7722245.jpg">Coast image</a> -  US National Archives and Records Administration</li><li><a href="https://commons.wikimedia.org/wiki/File:Cascadia_Subduction_Zone.svg">Diagram</a> - Carie Frantz</li></ul><li>San Andreas fault:<ul><li><a href="https://commons.wikimedia.org/wiki/File:San_Andreas_Fault_Aerial_View.gif">Aerial view of fault</a> - USGS</li><li><a href="https://commons.wikimedia.org/wiki/File:San_Andreas.svg">Diagram</a> - Carie Frantz</li></ul><li>Mid-Atlantic ridge:<ul><li><a href="https://commons.wikimedia.org/wiki/File:Transform_Faults.png">Ridge image</a> - uploaded by Ruud Loeffen</li><li><a href="https://commons.wikimedia.org/wiki/File:Oceanic-oceanic_constructive_plate_boundary.svg">Boundary diagram</a> - Domdomegg, <a href="https://creativecommons.org/licenses/by/4.0/deed.en">license</a></li></ul><li>African Rift Valley:<ul><li><a href="https://commons.wikimedia.org/wiki/File:NASA_-_Visible_Earth,_Lakes_of_the_African_Rift_Valley.jpg">Lakes of the African Rift Valley</a> - SeaWiFS Project, NASA/Goddard Space Flight Center, and ORBIMAGE</li><li><a href="https://commons.wikimedia.org/wiki/File:Gregory_Rift_Topographical.svg">Diagram</a> - Bamse and Aymatth2, <a href="https://creativecommons.org/licenses/by/3.0/deed.en">license</a></li></ul><li>Himalayas:<ul><li><a href="https://commons.wikimedia.org/wiki/File:Mt._Everest_(GeoDIL_number_-_817).jpg">Mt. Everest</a> - Dexter Perkins</li><li><a href="https://commons.wikimedia.org/wiki/File:India_71-0_Ma.gif">Diagram</a> - Pierre Dèzes</li></ul><li>Mariana Trench:<ul><li><a href="https://commons.wikimedia.org/wiki/File:ISS-30_Pagan_Island,_Northern_Marianas.jpg">Pagan Island</a> - NASA</li><li>Diagram - Generated with Google Gemini and edited by S. Leatham</li></ul><li>Quiz:<ul><li><a href="https://commons.wikimedia.org/wiki/File:Oceanic-continental_destructive_plate_boundary.svg">Diagram</a> - Domdomegg, <a href="https://creativecommons.org/licenses/by/4.0/deed.en">license</a></li></ul>',
};

// Initialize map and set view.
    const map = L.map('worldMap', {
        center: [20, 0],
        zoom: 3,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 0.8,
        minZoom: 3
    });
// Map provided by OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
// Tectonic plate boundaries
const tectonicPlatesUrl = 'https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json';
// Fetch the data 
fetch(tectonicPlatesUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Add everything to map
        L.geoJSON(data, {
            style: {
                color: '#ff7800',
                weight: 2,
                opacity: 0.8,
                dashArray: '5, 10',
            },
        }).addTo(map);
        console.log('Tectonic plate boundaries added to the map.');
        // Markers
        const circleStyle = {
            radius: 8,
            color: '#3599e6',
            weight: 1,
            fillColor: '#3599e6',
            fillOpacity: 1,
            className: 'circle-style'
        };
        
        L.circleMarker([27.6965, -44.1492], circleStyle).addTo(map)
            .bindPopup(`<b>Mid-Atlantic Ridge</b><br><a href="#" onclick='showPopup(${JSON.stringify(atlanticData)}); return false;'>Learn more</a>`);
        
        L.circleMarker([11.2727, 142.1312], circleStyle).addTo(map)
            .bindPopup(`<b>Mariana Trench</b><br><a href="#" onclick='showPopup(${JSON.stringify(marianaData)}); return false;'>Learn more</a>`);
        
        L.circleMarker([6.4918, 37.9581], circleStyle).addTo(map)
            .bindPopup(`<b>African Rift Valley</b><br><a href="#" onclick='showPopup(${JSON.stringify(africaData)}); return false;'>Learn more</a>`);
        
        L.circleMarker([46.0625, -125.7718], circleStyle).addTo(map)
            .bindPopup(`<b>Juan de Fuca Subduction Zone</b><br><a href="#" onclick='showPopup(${JSON.stringify(pnwData)}); return false;'>Learn more</a>`);

        L.circleMarker([37.7399, -122.6874], circleStyle).addTo(map)
            .bindPopup(`<b>San Andreas Fault</b><br><a href="#" onclick='showPopup(${JSON.stringify(californiaData)}); return false;'>Learn more</a>`);

        L.circleMarker([26.9875, 86.9211], circleStyle).addTo(map)
            .bindPopup(`<b>Himalayas</b><br><a href="#" onclick='showPopup(${JSON.stringify(himData)}); return false;'>Learn more</a>`);
        })    
    .catch(error => {
        console.error('Error loading tectonic plate data:', error);
        map.getContainer().insertAdjacentHTML('beforeend', '<div style="position: absolute; bottom: 10px; left: 10px; background: red; color: white; padding: 5px; z-index: 1000;">Failed to load tectonic plate data.</div>');
    });













