//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixShow {
  constructor(showTitle, showLength, showEpisodes, showGenre) {
    this.title = showTitle
    this.length = showLength
    this.episodes = showEpisodes
    this.genre = showGenre
  }
  rating() {
    console.log('you arent old enough to watch this!')
  }
  feedback() {
    console.log('this show is great!')
  }
}

let sillyShow = new NetflixShow('Silly Show', 30, 10,'comedy')