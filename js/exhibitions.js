const exhibitions = [
    {
        exhibitionName: "cosmology" ,
        id: 1 ,
        tileImg: "/assets/images/img_cosmology_tile.jpg" ,
        bannerImg: "../../assets/images/img_cosmology_banner.jpg" ,
        icon: "assets/icons/icon__cosmology.svg" ,
        copy: "Explore the wonders of our cosmos. Our fantastic exhibition, ‘The Sky Above Us’, explores the night sky and what we can see and know about the universe around us. You'll locate the various constellations and galaxies that can be seen and learn a bit about the early navigators who used the stars to travel by. Follow the journey of our solar exploration: from early Arab traders, to Galileo’s telescope, to the latest exploration of the planets in our solar system." ,
        events: [
            {
                event: "neptune",
                eventID: 1,
                exhibition: "cosmology",
                html: `
                <div>
                    <div class="exhibition_events__img">
                        <img src="assets/images/img_neptune_event.jpg" alt="image of a blue planet known as Neptune">
                    </div>
                    <p><b>Cosmology: Neptune</b></p>
                    <p>Learn about the blue gas giant that is part of our solar system</p>
                    <p>6 pm, room 325</p>
                </div>
                `
            }
        ],
        staff: [
            {
                id: 1,
                name: "Tobi-Wan Shenobi",
                title: "Head of Cosmology",
                email: "tobiwanshenobi@csm.com",
                profileImg: "../assets/images/img_profilepic_tobiwanshenobi.jpg"
            } ,
            {
                id: 2,
                name: "Lucy Skywalker",
                title: "Junior researcher, Cosmology",
                email: "lucyskywalker@csm.com",
                profileImg: "assets/images/img_profilepic_lucyskywalker.jpg"
            } ,
            {
                id: 3,
                name: "Anna Kiln",
                title: "Apprentice researcher, Guide",
                email: "annakiln@csm.com",
                profileImg: "../assets/images/img_profilepic_annakiln.jpg"
            }
        ]
    },
    {
        exhibitionName: "ecology" ,
        id: 2 ,
        tileImg: "/assets/images/img_ecology_tile.jpg" ,
        bannerImg: "../../assets/images/img_ecology_banner.jpg" ,
        icon: "assets/icons/icon__ecology.svg" ,
        copy: "" ,
        events: [],
        staff: [
            {
                id: 1,
                name: "Tobi-Wan Shenobi",
                title: "Head of ecology",
                email: "tobiwanshenobi@csm.com",
                profileImg: "../assets/images/img_profilepic_tobiwanshenobi.jpg"
            } ,
            {
                id: 2,
                name: "Lucy Skywalker",
                title: "Junior researcher, ecology",
                email: "lucyskywalker@csm.com",
                profileImg: "assets/images/img_profilepic_lucyskywalker.jpg"
            } ,
            {
                id: 3,
                name: "Anna Kiln",
                title: "Apprentice researcher, Guide",
                email: "annakiln@csm.com",
                profileImg: "../assets/images/img_profilepic_annakiln.jpg"
            }
        ]
    } ,
    {
        exhibitionName: "microbiology" ,
        id: 3 ,
        tileImg: "/assets/images/img_microbiology_tile.jpg" ,
        bannerImg: "../../assets/images/img_microbiology_banner.jpg" ,
        icon: "assets/icons/icon__microbiology.svg" ,
        copy: "" ,
        events: {
            event: "neptune",
            eventID: 1,
            exhibition: "microbiology",
            html: `
            <div>
                <div class="exhibition_events__img">
                    <img src="assets/images/img_neptune_event.jpg" alt="image of a blue planet known as Neptune">
                </div>
                <p><b>microbiology: Neptune</b></p>
                <p>Learn about the blue gas giant that is part of our solar system</p>
                <p>6 pm, room 325</p>
            </div>
            `
        },
        staff: [
            {
                id: 1,
                name: "Tobi-Wan Shenobi",
                title: "Head of microbiology",
                email: "tobiwanshenobi@csm.com",
                profileImg: "../assets/images/img_profilepic_tobiwanshenobi.jpg"
            } ,
            {
                id: 2,
                name: "Lucy Skywalker",
                title: "Junior researcher, microbiology",
                email: "lucyskywalker@csm.com",
                profileImg: "assets/images/img_profilepic_lucyskywalker.jpg"
            } ,
            {
                id: 3,
                name: "Anna Kiln",
                title: "Apprentice researcher, Guide",
                email: "annakiln@csm.com",
                profileImg: "../assets/images/img_profilepic_annakiln.jpg"
            }
        ]
    } ,
    
    {
        exhibitionName: "paleontology" ,
        id: 4 ,
        tileImg: "/assets/images/img_paleontology_tile.jpg" ,
        bannerImg: "../../assets/images/img_paleontology_banner.jpg" ,
        icon: "assets/icons/icon__paleontology.svg" ,
        copy: "" ,
        events: {
            event: "neptune",
            eventID: 1,
            exhibition: "paleontology",
            html: `
            <div>
                <div class="exhibition_events__img">
                    <img src="assets/images/img_neptune_event.jpg" alt="image of a blue planet known as Neptune">
                </div>
                <p><b>paleontology: Neptune</b></p>
                <p>Learn about the blue gas giant that is part of our solar system</p>
                <p>6 pm, room 325</p>
            </div>
            `
        },
        staff: [
            {
                id: 1,
                name: "Tobi-Wan Shenobi",
                title: "Head of paleontology",
                email: "tobiwanshenobi@csm.com",
                profileImg: "../assets/images/img_profilepic_tobiwanshenobi.jpg"
            } ,
            {
                id: 2,
                name: "Lucy Skywalker",
                title: "Junior researcher, paleontology",
                email: "lucyskywalker@csm.com",
                profileImg: "assets/images/img_profilepic_lucyskywalker.jpg"
            } ,
            {
                id: 3,
                name: "Anna Kiln",
                title: "Apprentice researcher, Guide",
                email: "annakiln@csm.com",
                profileImg: "../assets/images/img_profilepic_annakiln.jpg"
            }
        ]
    } ,
    {
        exhibitionName: "vr" ,
        id: 5 ,
        tileImg: "/assets/images/img_vr_tile.jpg" ,
        bannerImg: "../../assets/images/img_vr_banner.jpg" ,
        icon: "assets/icons/icon__vr.svg" ,
        copy: "" ,
        events: {
            event: "neptune",
            eventID: 1,
            exhibition: "vr",
            html: `
            <div>
                <div class="exhibition_events__img">
                    <img src="assets/images/img_neptune_event.jpg" alt="image of a blue planet known as Neptune">
                </div>
                <p><b>vr: Neptune</b></p>
                <p>Learn about the blue gas giant that is part of our solar system</p>
                <p>6 pm, room 325</p>
            </div>
            `
        },
        staff: [
            {
                id: 1,
                name: "Tobi-Wan Shenobi",
                title: "Head of vr",
                email: "tobiwanshenobi@csm.com",
                profileImg: "../assets/images/img_profilepic_tobiwanshenobi.jpg"
            } ,
            {
                id: 2,
                name: "Lucy Skywalker",
                title: "Junior researcher, vr",
                email: "lucyskywalker@csm.com",
                profileImg: "assets/images/img_profilepic_lucyskywalker.jpg"
            } ,
            {
                id: 3,
                name: "Anna Kiln",
                title: "Apprentice researcher, Guide",
                email: "annakiln@csm.com",
                profileImg: "../assets/images/img_profilepic_annakiln.jpg"
            }
        ]
    } ,
    {
        exhibitionName: "physics" ,
        id: 6 ,
        tileImg: "/assets/images/img_physics_tile.jpg" ,
        bannerImg: "../../assets/images/img_physics_banner.jpg" ,
        icon: "assets/icons/icon__physics.svg" ,
        copy: "" ,
        events: {
            event: "neptune",
            eventID: 1,
            exhibition: "physics",
            html: `
            <div>
                <div class="exhibition_events__img">
                    <img src="assets/images/img_neptune_event.jpg" alt="image of a blue planet known as Neptune">
                </div>
                <p><b>physics: Neptune</b></p>
                <p>Learn about the blue gas giant that is part of our solar system</p>
                <p>6 pm, room 325</p>
            </div>
            `
        },
        staff: [
            {
                id: 1,
                name: "Tobi-Wan Shenobi",
                title: "Head of physics",
                email: "tobiwanshenobi@csm.com",
                profileImg: "../assets/images/img_profilepic_tobiwanshenobi.jpg"
            } ,
            {
                id: 2,
                name: "Lucy Skywalker",
                title: "Junior researcher, physics",
                email: "lucyskywalker@csm.com",
                profileImg: "assets/images/img_profilepic_lucyskywalker.jpg"
            } ,
            {
                id: 3,
                name: "Anna Kiln",
                title: "Apprentice researcher, Guide",
                email: "annakiln@csm.com",
                profileImg: "../assets/images/img_profilepic_annakiln.jpg"
            }
        ]
    } 
]


const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const exhibitionID = parseFloat(parameter.get("id"));

function makeExhibitionSite() {
    const exhibition = exhibitions.find((exhibition => exhibition.id === exhibitionID));

    console.log(exhibition);

    let staff = "";
    exhibition.staff.forEach(p => {
    
        let staffHtml =`
        <div class="profile pr_tobi-wan">
            <img src="${p.profileImg}" alt="image of a happy man with dark hair and tan skin">
            <p><b>${p.name}</b></p>
            <p>${p.title}</p>
            <p>${p.email}</p>
        </div>
        `

        staff += staffHtml;
        })

    
    let events = "";
    exhibition.events.forEach(e => {

        let eventHtml = `
        <div>
            <div class="exhibition_events__img">
                <img src="assets/images/img_neptune_event.jpg" alt="image of a blue planet known as Neptune">
            </div>
            <p><b></b></p>
            <p>Learn about the blue gas giant that is part of our solar system</p>
            <p>6 pm, room 325</p>
        </div>
        `
        events += eventHtml;
    })




    let html = `
    <div>
        <section class="topbanner_exhibition" style="background-image: url(${exhibition.bannerImg})">
            <div class="img-container_banner">
                <img src="${exhibition.icon}" alt="icon of a planet">
            </div>
            <h1>${exhibition.exhibitionName}</h1>
        </section>
        </div>
        <div class="container">
            <div>
                <p>${exhibition.copy}</p>
            </div>
            <section class="exhibition_events">
                <h2>Upcoming Events</h2>
                ${events}
            </section>
            <section>
                <h2>Our staff in ${exhibition.exhibitionName}</h2>
                <div class="staff__section">

                ${staff}
                </div>
            </section>
        </div>

    `

    const main = document.querySelector("main");
    main.innerHTML = html;
}

makeExhibitionSite();