  constructor(){
    super()
    this.state = {
      argent : 25,
      panier : [],
      tab : []
    }
  }
  afficher = (i) => {
    let a = this.state
    let img = {
        alt : "",
        name : "",
        class : "d-none",
    } 
    a.tab.push(img)
    if (a.tab[i].alt ===  a.tab[i].name) {
      a.tab[i].class = "d-block"
    } else {
      a.tab[i].class = "d-none"
    }
    this.setState(a)
  }
