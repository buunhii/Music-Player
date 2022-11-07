const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicList = $(".music-list");
const mainMusic = $(".main-music");
const cdThumb = $(".cd-thumb");
const songDetailsName = $(".song-details .name");
const songDetailsArtist = $(".song-details .artist");
const audio = $("#audio");
const playBtn = $("#playpausebtn");
const playPauseBtn = $(".playpause");
const seekslider = $("#seekslider");
const currentTimeText = $("#currenttimetext");
const durationTimeText = $("#durationtimetext");
const checkbox = $("input[name=theme]");
const nextBtn = $("#nextbtn");
const prevBtn = $("#prevbtn");
const randomBtn = $("#random");
const repeatBtn = $("#repeat");
const menuBarBtn = $("#menu-bar");
const closeBtn = $("#close");
const audioDuration = $("audio-duration");
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "2AM",
      singer: "JustaTee ft. Big Daddy",
      path: "./assets/music/2am.mp3",
      image: "./assets/img/1.jpg",
    },
    {
      name: "Em Khác Gì Hoa",
      singer: "Lil Zpoet",
      path: "./assets/music/em_khac_gi_hoa.mp3",
      image: "./assets/img/2.jpg",
    },
    {
      name: "Tình Ca Tình Ta",
      singer: "kis",
      path: "./assets/music/tinh_ca_tinh_ta.mp3",
      image: "./assets/img/3.jpg",
    },
    {
      name: "Yêu Từ Đâu Mà Ra",
      singer: "Lil Zpoet",
      path: "./assets/music/yeu_tu_dau_ma_ra.mp3",
      image: "./assets/img/4.jpg",
    },
    {
      name: "Về Bên Anh",
      singer: "Jack",
      path: "./assets/music/ve_ben_anh.mp3",
      image: "./assets/img/5.jpg",
    },
    {
      name: "Ở Lại Với Anh",
      singer: "Minh Huy Ft. Hoàng Nhi",
      path: "./assets/music/o_lai_voi_anh.mp3",
      image: "./assets/img/6.jpg",
    },
    {
      name: "Lời Yêu Ngây Dại",
      singer: "Kha",
      path: "./assets/music/loi_yeu_ngay_dai.mp3",
      image: "./assets/img/7.jpg",
    },
    {
      name: "Đoạn Đường Sao Băng",
      singer: "Kha",
      path: "./assets/music/doan_duong_sao_bang.mp3",
      image: "./assets/img/8.jpg",
    },
    {
      name: "Dù Cho Mai Về Sau",
      singer: "buitruonglinh",
      path: "./assets/music/du_cho_mai_ve_sau.mp3",
      image: "./assets/img/9.jpg",
    },
    {
      name: "Đen Đá Không Đường",
      singer: "AMEE x HIEUTHUHAI",
      path: "./assets/music/den_da_khong_duong.mp3",
      image: "./assets/img/10.jpg",
    },
    {
      name: "Kẻ Điên Tin Vào Tình Yêu",
      singer: "Lil Z Poet",
      path: "./assets/music/ke_dien_tin_vao_tinh_yeu.mp3",
      image: "./assets/img/11.jpg",
    },
    {
      name: "Hẹn Em Kiếp Sau",
      singer: "Lã. ft. Duy Phúc & TiB x Ryan",
      path: "./assets/music/hen_em_kiep_sau.mp3",
      image: "./assets/img/12.jpg",
    },
    {
      name: "Mãi Mãi Không Phải Anh",
      singer: "Thanh Bình",
      path: "./assets/music/mai_mai_khong_phai_anh.mp3",
      image: "./assets/img/13.jpg",
    },
    {
      name: "Ký Sự Ngọt Ngào",
      singer: "Kha",
      path: "./assets/music/ky_su_ngot_ngao.mp3",
      image: "./assets/img/14.jpg",
    },
    {
      name: "Em Đã Xa Anh",
      singer: "Như Việt",
      path: "./assets/music/em_da_xa_anh.mp3",
      image: "./assets/img/15.jpg",
    },
    {
      name: "Từ Em Mà Ra",
      singer: "Lil Z Poet ft Đức Anh",
      path: "./assets/music/tu_em_ma_ra.mp3",
      image: "./assets/img/16.jpg",
    },
    {
      name: "LOOP",
      singer: "Coldzy feat. TO$KA, Left Hand",
      path: "./assets/music/loop.mp3",
      image: "./assets/img/17.jpg",
    },
    {
      name: "Liệu Giờ",
      singer: "2T & VENN",
      path: "./assets/music/lieu_gio.mp3",
      image: "./assets/img/18.jpg",
    },
    {
      name: "NO INTERNET",
      singer: "7UPPERCUTS ft SEACHAINS",
      path: "./assets/music/no_internet.mp3",
      image: "./assets/img/19.jpg",
    },
    {
      name: "vaicaunoicokhien...",
      singer: "GREY D x tlinh",
      path: "./assets/music/vai_cau_noi_co_khien_nguoi_thay_doi.mp3",
      image: "./assets/img/20.jpg",
    },
    {
      name: "Phố Cũ Còn Anh",
      singer: "Quinn ft Chilly",
      path: "./assets/music/pho_cu_con_anh.mp3",
      image: "./assets/img/21.jpg",
    },
    {
      name: "Đường Tôi Chở Em Về",
      singer: "buitruonglinh",
      path: "./assets/music/duong_toi_cho_em_ve.mp3",
      image: "./assets/img/22.jpg",
    },
    {
      name: "Ngày Mai Em Đi Mất",
      singer: "Khải Đăng x Đạt G",
      path: "./assets/music/ngay_mai_em_di_mat.mp3",
      image: "./assets/img/23.jpg",
    },
    {
      name: "Xe Đạp",
      singer: "Charles",
      path: "./assets/music/xe_dap.mp3",
      image: "./assets/img/24.jpg",
    },
    {
      name: "VSTRA",
      singer: "PHONG (ft. TGSN & Tyronee)",
      path: "./assets/music/vstra.mp3",
      image: "./assets/img/25.jpg",
    },
    {
      name: "Ánh Sao Và Bầu Trời",
      singer: "T.R.I x Cá",
      path: "./assets/music/anh_sao_va_bau_troi.mp3",
      image: "./assets/img/26.jpg",
    },
    {
      name: "CHILL DREAM",
      singer: "T.BII ft. UMIE",
      path: "./assets/music/chill_dream.mp3",
      image: "./assets/img/27.jpg",
    },
    {
      name: "Nghe Như Tình Yêu",
      singer: "HIEUTHUHAI",
      path: "./assets/music/nghe_nhu_tinh_yeu.mp3",
      image: "./assets/img/28.jpg",
    },
    {
      name: "Lỡ Say Bye Là Bye",
      singer: "LEMESE x CHANGG",
      path: "./assets/music/lo_say_bye_la_bye.mp3",
      image: "./assets/img/29.jpg",
    },
    {
      name: "biet iu 1 nguoi",
      singer: "Winno",
      path: "./assets/music/biet_iu_1_nguoi.mp3",
      image: "./assets/img/30.jpg",
    },
    {
      name: "GIAYPHUT",
      singer: "kidsai, Niz",
      path: "./assets/music/giay_phut.mp3",
      image: "./assets/img/31.jpg",
    },
    {
      name: "Muốn Nói Với Em",
      singer: "TTeam",
      path: "./assets/music/muon_noi_voi_em.mp3",
      image: "./assets/img/32.jpg",
    },
    {
      name: "OK NAH NAH",
      singer: "$ATIVA",
      path: "./assets/music/ok_nah_nah.mp3",
      image: "./assets/img/33.jpg",
    },
    {
      name: "Em 20",
      singer: "Winno",
      path: "./assets/music/em_20.mp3",
      image: "./assets/img/34.jpg",
    },
    {
      name: "Fancy",
      singer: "Winno",
      path: "./assets/music/fancy.mp3",
      image: "./assets/img/35.jpg",
    },
    {
      name: "Ở Trong Đôi Mắt Em",
      singer: "Winno",
      path: "./assets/music/o_trong_doi_mat_em.mp3",
      image: "./assets/img/36.jpg",
    },
    {
      name: "Say Đắm Trong Lần Đầu",
      singer: "Winno",
      path: "./assets/music/say_dam_trong_lan_dau.mp3",
      image: "./assets/img/37.jpg",
    },
    {
      name: "Tell Ur Mom II",
      singer: "Winno",
      path: "./assets/music/tell_ur_mom_ii.mp3",
      image: "./assets/img/38.jpg",
    },
    {
      name: "Cột Mốc Thời Gian",
      singer: "Winno",
      path: "./assets/music/cot_moc_thoi_gian.mp3",
      image: "./assets/img/39.jpg",
    },
    {
      name: "Anh Sẽ Đón Em",
      singer: "Nguyên",
      path: "./assets/music/anh_se_don_em.mp3",
      image: "./assets/img/40.jpg",
    },
    {
      name: "Ở NHÀ CHÁN QUÓ",
      singer: "TAYLOR",
      path: "./assets/music/o_nha_chan_quo.mp3",
      image: "./assets/img/41.jpg",
    },
    {
      name: "Biết Tìm Đâu",
      singer: "Hongbietnua",
      path: "./assets/music/biet_tim_dau.mp3",
      image: "./assets/img/42.jpg",
    },
    {
      name: "Em Có Nghe",
      singer: "Kha",
      path: "./assets/music/em_co_nghe.mp3",
      image: "./assets/img/43.jpg",
    },
    {
      name: "Lời Nói Điêu Trên Môi Em",
      singer: "Đỗ Nguyên Phúc ft. Lil Z Poet",
      path: "./assets/music/loi_noi_dieu_tren_moi_em.mp3",
      image: "./assets/img/44.jpg",
    },
    {
      name: "1-800-LOVE",
      singer: "HIEUTHUHAI, HURRYKNG, MANBO",
      path: "./assets/music/1_800_love.mp3",
      image: "./assets/img/45.jpg",
    },
    {
      name: "Chúng Ta Của Hiện Tại",
      singer: "Sơn Tùng M-TP",
      path: "./assets/music/chung_ta_cua_hien_tai.mp3",
      image: "./assets/img/46.jpg",
    },
    {
      name: "Muộn Rồi Mà Sao Còn",
      singer: "Sơn Tùng M-TP",
      path: "./assets/music/muon_roi_ma_sao_con.mp3",
      image: "./assets/img/47.jpg",
    },
    {
      name: "CUA",
      singer: "HIEUTHUHAI & MANBO",
      path: "./assets/music/cua.mp3",
      image: "./assets/img/48.jpg",
    },
    {
      name: "H In My Arms",
      singer: "Kha ft. LeNham",
      path: "./assets/music/h_in_my_arms.mp3",
      image: "./assets/img/49.jpg",
    },
    {
      name: "Waiting For You",
      singer: "MONO",
      path: "./assets/music/waiting_for_you.mp3",
      image: "./assets/img/50.jpg",
    },
    {
      name: "Em Là",
      singer: "MONO",
      path: "./assets/music/em_la.mp3",
      image: "./assets/img/51.jpg",
    },
    {
      name: "Anh Không Thể",
      singer: "MONO",
      path: "./assets/music/anh_khong_the.mp3",
      image: "./assets/img/52.jpg",
    },
    {
      name: "Tại Vì Sao",
      singer: "RPT MCK",
      path: "./assets/music/tai_vi_sao.mp3",
      image: "./assets/img/53.jpg",
    },
    {
      name: "tim em ko kó một đường nào",
      singer: "Winno x Heily",
      path: "./assets/music/tim_em_ko_ko_mot_duong_nao.mp3",
      image: "./assets/img/54.jpg",
    },
    {
      name: "Lạc Vào Trong Mơ",
      singer: "SimonC x WUY x Minn",
      path: "./assets/music/lac_vao_trong_mo.mp3",
      image: "./assets/img/55.jpg",
    },
    {
      name: "GETCHA LOVE",
      singer: "Mable & VDT ft. SnowzyBoy",
      path: "./assets/music/getcha_love.mp3",
      image: "./assets/img/56.jpg",
    },
    {
      name: "5050",
      singer: "HURRYKNG, MANBO & HIEUTHUHAI",
      path: "./assets/music/5050.mp3",
      image: "./assets/img/57.jpg",
    },
    {
      name: "LAVIAI",
      singer: "HURRYKNG x HIEUTHUHAI",
      path: "./assets/music/laviai.mp3",
      image: "./assets/img/58.jpg",
    },
    {
      name: "Hẹn Gặp Em Dưới Ánh Trăng",
      singer: "HURRYKNG, HIEUTHUHAI, MANBO",
      path: "./assets/music/hen_gap_em_duoi_anh_trang.mp3",
      image: "./assets/img/59.jpg",
    },

    {
      name: "CHƠI",
      singer: "HIEUTHUHAI ft MANBO",
      path: "./assets/music/choi.mp3",
      image: "./assets/img/60.jpg",
    },
    {
      name: "Vệ Tinh",
      singer: "HIEUTHUHAI ft. Hoàng Tôn",
      path: "./assets/music/ve_tinh.mp3",
      image: "./assets/img/61.jpg",
    },
    {
      name: "Bật Nhạc Lên",
      singer: "HIEUTHUHAI ft. Harmonie",
      path: "./assets/music/bat_nhac_len.mp3",
      image: "./assets/img/62.jpg",
    },
    {
      name: "Ánh Chiều Tàn",
      singer: "D Empty",
      path: "./assets/music/anh_chieu_tan.mp3",
      image: "./assets/img/63.jpg",
    },
    {
      name: "-237°C",
      singer: "HIEUTHUHAI x LOWNA",
      path: "./assets/music/237_c.mp3",
      image: "./assets/img/64.jpg",
    },
    {
      name: "Lời Đường Mật",
      singer: "LYLY ft HIEUTHUHAI",
      path: "./assets/music/loi_duong_mat.mp3",
      image: "./assets/img/65.jpg",
    },
    {
      name: "Em Là Hoàng Hôn",
      singer: "VANG ft. CLOUD5",
      path: "./assets/music/em_la_hoang_hon.mp3",
      image: "./assets/img/66.jpg",
    },
    {
      name: "cigarette",
      singer: "PAR SG ft. Cigar",
      path: "./assets/music/cigarette.mp3",
      image: "./assets/img/67.jpg",
    },
    {
      name: "BERLIN",
      singer: "Khoi Vu",
      path: "./assets/music/berlin.mp3",
      image: "./assets/img/68.jpg",
    },
    {
      name: "Ngày Bên Em",
      singer: "Wuyn",
      path: "./assets/music/ngay_ben_em.mp3",
      image: "./assets/img/69.jpg",
    },
    {
      name: "SOJU LOVE",
      singer: "Obito",
      path: "./assets/music/soju_love.mp3",
      image: "./assets/img/70.jpg",
    },
    {
      name: "Như Anh Mơ",
      singer: "PC",
      path: "./assets/music/nhu_anh_mo.mp3",
      image: "./assets/img/71.jpg",
    },
    {
      name: "Em Không Hiểu",
      singer: "Changg",
      path: "./assets/music/em_khong_hieu.mp3",
      image: "./assets/img/72.jpg",
    },
    {
      name: "Dưới Cơn Mưa",
      singer: "Obito x Lena",
      path: "./assets/music/duoi_con_mua.mp3",
      image: "./assets/img/73.jpg",
    },
    {
      name: "3107",
      singer: "DuongG x NÂU x W/N",
      path: "./assets/music/3107.mp3",
      image: "./assets/img/74.jpg",
    },
    {
      name: "3107-2",
      singer: "DuongG x NÂU x W/N",
      path: "./assets/music/3107_2.mp3",
      image: "./assets/img/75.jpg",
    },
    {
      name: "Thằng Điên",
      singer: "JustaTee",
      path: "./assets/music/thang_dien.mp3",
      image: "./assets/img/76.jpg",
    },
    {
      name: "She Neva Knows",
      singer: "JustaTee",
      path: "./assets/music/she_neva_knows.mp3",
      image: "./assets/img/77.jpg",
    },
    {
      name: "Đã Lỡ Yêu Em Nhiều",
      singer: "JustaTee",
      path: "./assets/music/da_lo_yeu_em_nhieu.mp3",
      image: "./assets/img/78.jpg",
    },
    {
      name: "Phải Làm Sao Để Níu Kéo Một Người",
      singer: "Sean x Tweny",
      path: "./assets/music/phai_lam_sao_de_niu_keo_mot_nguoi.mp3",
      image: "./assets/img/79.jpg",
    },
    {
      name: "Sài Gòn Hôm Nay Mưa",
      singer: "Hoàng Duyên & JSOL",
      path: "./assets/music/sai_gon_hom_nay_mua.mp3",
      image: "./assets/img/80.jpg",
    },
    {
      name: "Ai Đưa Em Về",
      singer: "HTia x Lê Thiện Hiếu",
      path: "./assets/music/ai_dua_em_ve.mp3",
      image: "./assets/img/81.jpg",
    },
    {
      name: "Forget Me Now",
      singer: "Fishy ft. Trí Dũng",
      path: "./assets/music/forget_me_now.mp3",
      image: "./assets/img/82.jpg",
    },
    {
      name: "Anh Đã Lạc Vào",
      singer: "Green ft. Truzg",
      path: "./assets/music/anh_da_lac_vao.mp3",
      image: "./assets/img/83.jpg",
    },
    {
      name: "Flexin' trên Circle K",
      singer: "Low G",
      path: "./assets/music/flexin_tren_circle_k.mp3",
      image: "./assets/img/84.jpg",
    },
    {
      name: "Phiêu Bồng",
      singer: "Tofu ft. VoVanDuc",
      path: "./assets/music/phieu_bong.mp3",
      image: "./assets/img/85.jpg",
    },
    {
      name: "Sài Gòn Đau Lòng Quá",
      singer: "Hứa Kim Tuyền & Hoàng Duyên",
      path: "./assets/music/sai_gon_dau_long_qua.mp3",
      image: "./assets/img/86.jpg",
    },
    {
      name: "Tình Thật Tình Mơ",
      singer: "Mer",
      path: "./assets/music/tinh_that_tinh_mo.mp3",
      image: "./assets/img/87.jpg",
    },
    {
      name: "Giấc Mơ Rất Thơ",
      singer: "Mer ft. thaison!",
      path: "./assets/music/giac_mo_rat_tho.mp3",
      image: "./assets/img/88.jpg",
    },
    {
      name: "LAVIE",
      singer: "WEAN",
      path: "./assets/music/lavie.mp3",
      image: "./assets/img/89.jpg",
    },
    {
      name: "MOT NGUOI VI EM",
      singer: "WEAN",
      path: "./assets/music/mot_nguoi_vi_em.mp3",
      image: "./assets/img/90.jpg",
    },
    {
      name: "AI BIET",
      singer: "WEAN",
      path: "./assets/music/ai_biet.mp3",
      image: "./assets/img/91.jpg",
    },
    {
      name: "Love U So",
      singer: "WEAN ft. TÙNG",
      path: "./assets/music/love_u_so.mp3",
      image: "./assets/img/92.jpg",
    },
    {
      name: "ALONE",
      singer: "WEAN ft AKI",
      path: "./assets/music/alone.mp3",
      image: "./assets/img/93.jpg",
    },
    {
      name: "Thích Em Hơi Nhiều",
      singer: "Wren Evans",
      path: "./assets/music/thich_em_hoi_nhieu.mp3",
      image: "./assets/img/94.jpg",
    },
    {
      name: "Gu",
      singer: "Freaky ft. Seachains",
      path: "./assets/music/gu.mp3",
      image: "./assets/img/95.jpg",
    },
    {
      name: "Ôm Em Lần Cuối",
      singer: "Nit x Sing",
      path: "./assets/music/om_em_lan_cuoi.mp3",
      image: "./assets/img/96.jpg",
    },
    {
      name: "Dịu Dàng Em Đến",
      singer: "ERIK",
      path: "./assets/music/diu_dang_em_den.mp3",
      image: "./assets/img/97.jpg",
    },
    {
      name: "3107 3",
      singer: "W/n",
      path: "./assets/music/3107_3.mp3",
      image: "./assets/img/98.jpg",
    },
    {
      name: "Lỗi Tại Anh",
      singer: "Alex Lam",
      path: "./assets/music/loi_tai_anh_.mp3",
      image: "./assets/img/99.jpg",
    },
    {
      name: "Chỉ Là Muốn Nói",
      singer: "Khải",
      path: "./assets/music/chi_la_muon_noi.mp3",
      image: "./assets/img/100.jpg",
    },
    {
      name: "Crying Over You",
      singer: "JustaTee ft. Binz",
      path: "./assets/music/crying_over_you.mp3",
      image: "./assets/img/101.jpg",
    },
    {
      name: "Bâng Khuâng",
      singer: "JustaTee",
      path: "./assets/music/buang_khuang.mp3",
      image: "./assets/img/102.jpg",
    },
    {
      name: "Thôi Hẹn Em",
      singer: "Madihu",
      path: "./assets/music/thoi_hen_em.mp3",
      image: "./assets/img/103.jpg",
    },
    {
      name: "Vì Anh Đâu Có Biết",
      singer: "Madihu ft. Vũ.",
      path: "./assets/music/vi_anh_dau_co_biet.mp3",
      image: "./assets/img/104.jpg",
    },
    {
      name: "Có Em",
      singer: "Madihu",
      path: "./assets/music/co_em.mp3",
      image: "./assets/img/105.jpg",
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                <div class="song ${
                  index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                        <div class="row">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <audio src="" id="main-audio"> ${
                                  song.path
                                }</audio>
                                <span id="option" class="waves_container ${
                                  index === this.currentIndex ? "show_wave" : ""
                                }">
                                  <span class="music_waves wave1"></span>
                                  <span class="music_waves wave2"></span>
                                  <span class="music_waves wave3"></span>
                                  <span class="music_waves wave4"></span>
                                  <span class="music_waves wave5"></span>
                                </span>
                        </div>
                </div>
             `;
    });
    mainMusic.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      playPauseBtn.classList.add("active");
      cdThumbAnimate.play();
    };
    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      playPauseBtn.classList.remove("active");
      cdThumbAnimate.pause();
    };
    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        seekslider.value = progressPercent;
        let current_minutes = Math.floor(audio.currentTime / 60);
        let current_seconds = Math.floor(
          audio.currentTime - current_minutes * 60
        );
        let duration_minutes = Math.floor(audio.duration / 60);
        let duration_seconds = Math.floor(
          audio.duration - duration_minutes * 60
        );
        if (current_minutes < 10) {
          current_minutes = `0${current_minutes}`;
        }
        if (current_seconds < 10) {
          current_seconds = `0${current_seconds}`;
        }
        if (duration_minutes < 10) {
          duration_minutes = `0${duration_minutes}`;
        }
        if (duration_seconds < 10) {
          duration_seconds = `0${duration_seconds}`;
        }
        currentTimeText.innerText = `${current_minutes}:${current_seconds}`;
        durationTimeText.innerText = `${duration_minutes}:${duration_seconds}`;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    seekslider.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    // Xử lý bật / tắt random song
    // Handling on / off random song
    // };
    // randomBtn.onclick = function () {
    //   _this.isRandom = !_this.isRandom;

    //   if (_this.isRandom) {
    //     _this.playRandomSong();
    //     audio.play();
    //     playPauseBtn.classList.toggle("active", _this.isRandom);
    //     randomBtn.classList.toggle("active", _this.isRandom);
    //   } else {
    //     nextBtn.click();
    //     _this.playRandomSong();
    //     randomBtn.classList.remove("active", _this.isRandom);
    //   }
    //   audio.play();
    // };
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      if (_this.isRandom) {
        playPauseBtn.classList.toggle("active", _this.isRandom);
        randomBtn.classList.toggle("active", _this.isRandom);
        _this.setConfig("isRandom", _this.isRandom);
      } else {
        randomBtn.classList.remove("active");
        // playPauseBtn.classList.add("active");
      }
      audio.play();
    };
    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      repeatBtn.classList.toggle("active", _this.isRepeat);
      _this.setConfig("isRepeat", _this.isRepeat);
    };
    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
    // Xử lý chuyển đổi màu theme
    checkbox.onchange = function () {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    };
    // Xử lý bật menu bar để show song trong music list
    menuBarBtn.onclick = function () {
      musicList.classList.add("show");
    };
    // Xử lý đóng music list để hiện lại
    closeBtn.onclick = function () {
      // menuBarBtn.click()
      musicList.classList.remove("show");
    };
    // Lắng nghe hành vi click vào mainMusic
    mainMusic.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
        // Xữ lý khi click vào song option
      }
    };
  },

  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
  },
  loadCurrentSong: function () {
    songDetailsName.textContent = this.currentSong.name;
    songDetailsArtist.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();
  },
};
app.start();
