// ========================================
// AUTHENTICATION
// ========================================
if (!localStorage.getItem("user")) {
  const user = prompt("Enter username:");
  localStorage.setItem("user", user);
}

// ========================================
// ELEMENTS
// ========================================
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");

const popularGrid = document.getElementById("popularGrid");
const rockGrid = document.getElementById("rockGrid");
const jazzGrid = document.getElementById("jazzGrid");
const danceGrid = document.getElementById("danceGrid");

const gridView = document.getElementById("gridView");
const playlistView = document.getElementById("playlistView");
const playlistTitle = document.getElementById("playlistTitle");
const songList = document.getElementById("songList");

// Progress bar elements
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// ========================================
// PLAYLIST DATA (PLAYLISTS → INNER SONG LIST)
// ========================================
const playlistData = {
  popular: [
    {
      title: "Top Hits",
      cover: "assets/rain with coffee.jpg",
      songs: [
        { name: "Kabhi jo badal", src: "songs/Kabhi Jo Baadal Barse.mp3" },
        { name: "Thodi der", src: "songs/Thodi Der - Half Girlfriend 128 Kbps.mp3" },
        { name: "Tum hi ho", src: "songs/Tum Hi Ho - Aashiqui 2 320 Kbps.mp3" },
        { name: "Baarish", src: "songs/Baarish - Half Girlfriend 320 Kbps.mp3" },
        { name: "Dil diyan gallan", src: "songs/Dil Diyan Gallan.mp3" },
        { name: "Tera ban jaunga", src: "songs/128-Tera Ban Jaunga - Kabir Singh 128 Kbps.mp3" },
        { name: "Rait zara si", src: "songs/Rait Zara Si - Atrangi Re 320 Kbps.mp3" },
        { name: "Samjhawan", src: "songs/Samjhawan Humpty Sharma Ki Dulhania 320 Kbps.mp3" },
        { name: "Chota sa fasana", src: "songs/Chota Sa Fasana - Karwaan 320 Kbps.mp3" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
       
      ]
    },
    {
      title: "tunes",
      cover: "assets/covers/cover2.jpg",
      songs: [
        { name: "Island", src: "songs/mixkit-island-beat-250.mp3" },
        { name: "Cat walk", src: "songs/mixkit-cat-walk-371.mp3" },
        { name: "Bridge", src: "songs/mixkit-bridge-n-98-621.mp3" },
        { name: "Beauty", src: "songs/Beauty(chosic.com).mp3" },
        { name: "Bliss", src: "songs/Luke-Bergs-Bliss(chosic.com).mp3" },
        { name: "Winter", src: "songs/Winter-Long-Version(chosic.com).mp3" },
        { name: "", src: "" },
        { name: "", src: "" },
      ]
    },
    {
      title: "Uploads",
      cover: "assets/covers/default.jpg",
      songs: [
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
      ]
    }
  ],

  rock: [
    {
      title: "Rock Classics",
      cover: "assets/Charlie-Puth.webp",
      songs: [
        { name: "How long", src: "songs/Charlie Puth - _How Long_ [Official Video].mp3" },
        { name: "I dont wanna live forever", src: "songs/WYWn4V7m21i-qppBhaUDAZuJ7JJHKUudoTL1RjJnjQ3hPMXfGQYUqaddHeLKeYShbt8bmzu1J8P_GPU-w0NZsojPnmg0hqtrNF51voOWD8IcDMIhO72xB-DLJbNML5lllibkeG3LtwctyfC2mIfvT1eeRfbGa3A2R3FQ_aE29X0Nx1Wjog.mp3" },
        { name: "Queen of hearts", src: "songs/Starla_Edney_-_Queen_of_Hearts_(mp3.pm).mp3" },
        { name: "We don't talk anymore", src: "songs/CharliePuth_-_We_Don_t_Talk_Anymore_(mp3.pm).mp3" },
        { name: "I like me better", src: "songs/Lauv_-_I_Like_Me_Better_Official_Audio_(mp3.pm).mp3" },
        { name: "Safari", src: "songs/Serena_-_Safari_(mp3.pm).mp3" },
        { name: "Gasolina", src: "songs/Serena_-_Gasolina_erger.ru_2019_(mp3.pm).mp3" },
        { name: "Night changes", src: "songs/One_Direction_-_Night_Change_(mp3.pm).mp3" },
        { name: "Into you", src: "songs/Ariana_Grande_-_Into_You_(mp3.pm).mp3" },
        { name: "Stitches", src: "songs/Shawn_Mendes_-_Stitches_Radio_MeL0mAn_(mp3.pm).mp3" },
        { name: "Treat you better", src: "songs/Shawn_Mendes_-_Treat_You_Better_ORIGINAL_(mp3.pm).mp3" },
        { name: "Friends", src: "songs/Marshmello_Anne_Marie_-_Friends_(mp3.pm).mp3" },
        { name: "Lush life", src: "songs/Zara_Larsson_-_Lush_Life_Europa_Plus_Ua_2016_(mp3.pm).mp3" },
        { name: "Side to side", src: "songs/Ariana_Grande_-_Into_You_(mp3.pm).mp3" },
        { name: "One kiss", src: "songs/Calvin_Harris_and_Dua_Lipa_-_One_kiss_(mp3.pm).mp3" },
        { name: "Attention", src: "songs/Charles_puth_-_Attention_(mp3.pm).mp3" },
        { name: "Heat waves", src: "songs/Glass_Animals_-_Heat_Waves_(mp3.pm).mp3" },
        { name: "Kodak black", src: "songs/Kodak-Black-NLE-Choppa-Ft-Jimin-of-BTS-Jvke-Muni-Long-Angel-Pt.-1-Official-Music-video.mp3" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
      ]
    }
  ],

  jazz: [
    {
      title: "Kannada melodies",
      cover: "assets/kannada.jpg",
      songs: [
        { name: "Kele chaluve", src: "songs\Kele_Cheluve_Full_Video_Song___Rangitaranga_Video_Songs___Nirup_Bhandari,_Radhika_Chetan,_Avantika_S(256k).mp3" },
        { name: "Ale Ale", src: "songs\Ale_Ale___Audio_Song___Savaari___Raghu_Mukherjee___Srinagar_Kitty___Kamalini_Mukharji__M.Kadri(256k).mp3" },
        { name: "", src: "" },
        { name: "", src: "" },
      ]
    }
    
  ],

  dance: [
    {
      title: "Punjabi hits",
      cover: "assets/guru_dhawani001.jpg",
      songs: [
        { name: "Patola", src: "songs/Patola - Blackmail 320 Kbps.mp3" },
        { name: "High Rated Gabru", src: "songs/High Rated Gabru - Nawabzaade 320 Kbps.mp3" },
        { name: "High Heels Te Nachche", src: "songs/High Heels Te Nachche - Ki And Ka 320 Kbps.mp3" },
        { name: "Cin chin chu", src: "songs/Chin_Chin_Chu(256k).mp3" },
      ]
    },

    {
      title: "Regional",
      cover: "",
      songs: [
        { name: "Dippam Dappam", src: "songs/Dippam Dappam (From Kaathuvaakula Rendu Kaadhal).mp3" },
        { name: "", src: "" },
        { name: "", src: "" },
        { name: "", src: "" },
      ]
    }
  ]
};

// ========================================
// CURRENT PLAYLIST STATE
// ========================================
let currentPlaylistSongs = [];
let currentSongIndex = 0;
let currentSongName = "";

// ========================================
// LOAD PLAYLIST GRID VIEW
// ========================================
function loadPlaylistGrid(grid, playlistList) {
  grid.innerHTML = "";

  playlistList.forEach((playlist) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <div class="cover-wrap">
        <img src="${playlist.cover}" alt="${playlist.title}">
        <div class="play-overlay">▶</div>
      </div>
      <p>${playlist.title}</p>
    `;

    div.onclick = () => openPlaylist(playlist);
    grid.appendChild(div);
  });
}

function loadAllPlaylists() {
  loadPlaylistGrid(popularGrid, playlistData.popular);
  loadPlaylistGrid(rockGrid, playlistData.rock);
  loadPlaylistGrid(jazzGrid, playlistData.jazz);
  loadPlaylistGrid(danceGrid, playlistData.dance);
}

loadAllPlaylists();

// ========================================
// OPEN / CLOSE PLAYLIST VIEW
// ========================================
function openPlaylist(playlist) {
  gridView.classList.add("hidden");
  playlistView.classList.remove("hidden");

  playlistTitle.innerText = playlist.title;
  currentPlaylistSongs = playlist.songs;
  currentSongIndex = 0;

  renderSongs();
}

function closePlaylist() {
  playlistView.classList.add("hidden");
  gridView.classList.remove("hidden");
}

// ========================================
// RENDER SONGS INSIDE PLAYLIST VIEW
// ========================================
function renderSongs() {
  songList.innerHTML = "";

  if (currentPlaylistSongs.length === 0) {
    songList.innerHTML = `<p style="opacity:0.8;">No songs in this playlist.</p>`;
    return;
  }

  currentPlaylistSongs.forEach((song, index) => {
    const row = document.createElement("div");
    row.className = "song-row";

    row.innerHTML = `
      <span>${song.name}</span>
      <span>▶</span>
    `;

    row.onclick = () => playSongFromPlaylist(index, row);

    songList.appendChild(row);
  });
}

// ========================================
// PLAY SONG FROM PLAYLIST VIEW
// ========================================
function playSongFromPlaylist(index, rowElement) {
  // Highlight active row
  document.querySelectorAll(".song-row").forEach(r => r.classList.remove("active"));
  rowElement.classList.add("active");

  currentSongIndex = index;

  audio.src = currentPlaylistSongs[index].src;
  audio.play();

  currentSongName = currentPlaylistSongs[index].name;
  nowPlaying.innerText = "Now Playing: " + currentSongName;
}

// ========================================
// MINI PLAYER CONTROLS
// ========================================
function playPause() {
  if (!audio.src) {
    alert("Select a song first!");
    return;
  }
  audio.paused ? audio.play() : audio.pause();
}

function nextSong() {
  if (currentPlaylistSongs.length === 0) return;

  currentSongIndex = (currentSongIndex + 1) % currentPlaylistSongs.length;
  audio.src = currentPlaylistSongs[currentSongIndex].src;
  audio.play();

  currentSongName = currentPlaylistSongs[currentSongIndex].name;
  nowPlaying.innerText = "Now Playing: " + currentSongName;

  highlightCurrentSongRow();
}

function prevSong() {
  if (currentPlaylistSongs.length === 0) return;

  currentSongIndex = (currentSongIndex - 1 + currentPlaylistSongs.length) % currentPlaylistSongs.length;
  audio.src = currentPlaylistSongs[currentSongIndex].src;
  audio.play();

  currentSongName = currentPlaylistSongs[currentSongIndex].name;
  nowPlaying.innerText = "Now Playing: " + currentSongName;

  highlightCurrentSongRow();
}

// Highlight correct row when Next/Prev
function highlightCurrentSongRow() {
  const rows = document.querySelectorAll(".song-row");
  rows.forEach(r => r.classList.remove("active"));

  if (rows[currentSongIndex]) {
    rows[currentSongIndex].classList.add("active");
  }
}

audio.addEventListener("ended", nextSong);

// ========================================
// UPLOAD SONG (Adds into Popular → Uploads Playlist)
// ========================================
function uploadSong(event) {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

  const newSong = {
    name: file.name,
    src: url
  };

  // Add to Uploads playlist
  const uploadsPlaylist = playlistData.popular.find(p => p.title === "Uploads");
  uploadsPlaylist.songs.push(newSong);

  alert("Song added to Uploads playlist!");

  // If currently inside Uploads playlist, refresh list
  if (playlistTitle.innerText === "Uploads") {
    currentPlaylistSongs = uploadsPlaylist.songs;
    renderSongs();
  }
}

// ========================================
// SEARCH PLAYLISTS (GRID VIEW ONLY)
// ========================================
function searchSongs() {
  const q = document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("p").innerText.toLowerCase();
    card.style.display = title.includes(q) ? "block" : "none";
  });
}

// ========================================
// THEME TOGGLE
// ========================================
function toggleTheme() {
  document.body.classList.toggle("light");
}

// ========================================
// LOGOUT
// ========================================
function logout() {
  localStorage.removeItem("user");
  location.reload();
}

// ========================================
// PROGRESS BAR (SONG FLOW CONTROL)
// ========================================
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;

  currentTimeEl.innerText = formatTime(audio.currentTime);
  durationEl.innerText = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  if (!audio.duration) return;
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// ========================================
// EQUALIZER + GENRE PRESETS
// ========================================
const canvas = document.getElementById("equalizer");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let eqEnabled = true;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(audio);

const analyser = audioCtx.createAnalyser();

// Frequency bands
const bands = [
  audioCtx.createBiquadFilter(),
  audioCtx.createBiquadFilter(),
  audioCtx.createBiquadFilter(),
  audioCtx.createBiquadFilter(),
  audioCtx.createBiquadFilter()
];

const freqs = [60, 170, 350, 1000, 3500];

bands.forEach((band, i) => {
  band.type = "peaking";
  band.frequency.value = freqs[i];
  band.Q.value = 1;
  band.gain.value = 0;
});

// Connect chain
source.connect(bands[0]);
bands.reduce((prev, curr) => {
  prev.connect(curr);
  return curr;
});
bands[bands.length - 1].connect(analyser);
analyser.connect(audioCtx.destination);

// Visualizer
analyser.fftSize = 128;
const dataArray = new Uint8Array(analyser.frequencyBinCount);

function drawEQ() {
  requestAnimationFrame(drawEQ);
  if (!eqEnabled) return;

  analyser.getByteFrequencyData(dataArray);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = canvas.width / dataArray.length;
  let x = 0;

  dataArray.forEach(v => {
    const h = v / 2;
    ctx.fillStyle = "#000";
    ctx.fillRect(x, canvas.height - h, barWidth - 2, h);
    x += barWidth;
  });
}

audio.addEventListener("play", () => {
  if (audioCtx.state === "suspended") audioCtx.resume();
  drawEQ();
});

// Toggle EQ
function toggleEQ() {
  eqEnabled = !eqEnabled;
  if (!eqEnabled) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Presets
const presets = {
  flat:    [0, 0, 0, 0, 0],
  pop:     [2, 1, 0, 1, 2],
  classic: [0, 1, 2, 1, 0],
  dance:   [4, 2, 0, 2, 4],
  blues:   [2, 2, 1, 1, 0],
  jazz:    [1, 2, 2, 2, 1],
  slow:    [1, 0, 2, 0, 1],
  electro: [5, 3, 0, 3, 5],
  rock:    [4, 3, 2, 3, 4],
  country: [1, 1, 2, 2, 1]
};

function setPreset(name) {
  const gains = presets[name];
  bands.forEach((band, i) => {
    band.gain.value = gains[i];
  });
}
