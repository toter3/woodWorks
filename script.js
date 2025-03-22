const files = [
    { file: "assets/living_room_table.jpg", description: "Small table for the living room, made from found wood plate" },
    { file: "assets/beer_cooking_stand.jpg", description: "A wheeled stand for a beer brewing pot, featuring a dedicated space for hanging a strainer. Made from wood and welded construction rebars." },
    { file: "assets/wooden_table.jpg", description: "A backyard wooden table, built from dismantled bed frame parts" },
    { file: "assets/chair.jpg", description: "A wooden chair for the back yard" },
    { file: "assets/mangal_cabin.jpg", description: "A wooden platform built over an old sewer hole to make use of the wasted space." },
    { file: "assets/corner_shelves_thing.jpg", description: "Custom-built wooden corner shelves stand" },
    { file: "assets/cat_stairs.jpg", description: "Stairs for my old cat who has trouble jumping high to reach the window." },
    { file: "assets/lamp.jpg", description: "A lamp made of a tree branch and 3d printed lampshades, still in work process" },
    { file: "assets/kitchen_counter_and_shelf.jpg", description: "Wooden kitchen counter and shelf" },
    { file: "assets/projector_screen.mp4", description: "A remote-controlled rolling projector screen for my backyard, built from wood and a repurposed remote-controlled bed motor" },
    { file: "assets/lights_strip.mp4", description: "Custom LED strip with programmable changing color zones, controlled by an Arduino" },
];

let currentIndex = 0;

function showSlide(index) {
    const carousel = document.getElementById("carousel");
    const description = document.getElementById("description");
    carousel.innerHTML = "";

    const { file, description: desc } = files[index];
    const ext = file.split(".").pop();
    let mediaElement;

    if (ext === "mp4") {
        mediaElement = document.createElement("video");
        mediaElement.src = file;
        mediaElement.controls = true;
    } else {
        mediaElement = document.createElement("img");
        mediaElement.src = file;
    }

    mediaElement.classList.add("carousel-item");
    carousel.appendChild(mediaElement);
    description.innerText = desc;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % files.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + files.length) % files.length;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);
