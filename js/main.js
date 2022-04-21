const list_song = document.querySelector(".list-song");
const audio = document.querySelector("#audio");
const App = {
  songs: [
    {
      id: 1,
      name: "Có chắc yêu là đây",
      avatar:
        "https://i.scdn.co/image/ab67616d0000b27362dee5c4741a0a9287c690ca",
      author: "Sơn Tùng MTP",
      path: "./music/ccyld.mp3",
      time: "3:45",
    },
    {
      id: 2,
      name: "Chúng ta của hiện tại",
      avatar: "https://i1.sndcdn.com/artworks-YA2uCPL0cTNF-0-t500x500.jpg",
      author: "Sơn Tùng MTP",
      path: "./music/ctcht.mp3",
      time: "5:02",
    },
    {
      id: 3,
      name: "Muộn rồi mà sao còn",
      avatar:
        "https://i.scdn.co/image/ab67616d0000b27329f906fe7a60df7777b02ee1",
      author: "Sơn Tùng MTP",
      path: "./music/mrmsc.mp3",
      time: "4:00",
    },
  ],
  currentIndex: 0,
  render: function () {
    const songs = this.songs;
    const html = songs.map((e) => {
      return `
      <div class="song mt-1">
      <div class="row">
        <div class="col-md-8">
          <div class="song-info d-flex align-items-center">
            <div style="position: relative;" class="song-thumbnail">
              <img src="${e.avatar}" alt="" width="40"
                height="40">
              <i class="play_btn fas fa-play"
                style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); cursor: pointer;"></i>
            </div>
            <div class="ms-3">
              <div class="song-name">
                ${e.name}
              </div>
              <div class="song-singer">
              ${e.author}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="song-time">
            <span> ${e.time}</span>
          </div>
        </div>
        <div class="col-md">
          <div class="song-option">
            <i class="fas fa-heart"></i>
            <i class="fas fa-ellipsis-h ms-3"></i>
          </div>
        </div>
      </div>
    </div>
      `;
    });
    list_song.innerHTML = html.join("");
  },
  start: function () {
    this.render();
  },
};
App.start();
