
let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

// crete an array of userlist

const users = [
  {
    profileUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Pankaj Singh",
    email: "pankaj74@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rahul Sharma",
    email: "rahul1@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Anjali Verma",
    email: "anjali2@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Amit Kumar",
    email: "amit3@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Pooja Singh",
    email: "pooja4@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Vikas Patel",
    email: "vikas5@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Neha Gupta",
    email: "neha12@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Rohit Mehta",
    email: "rohit11@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Sandeep Yadav",
    email: "sandeep13@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Kriti Malhotra",
    email: "kriti14@gmail.com",
  }
];

// create a function for rander userlist

function renderUsers(arr) {

    userContainer.innerHTML = ''

    arr.map(function (obj) {
        let { profileUrl, name, email } = obj

        let divElem = document.createElement('div');
        divElem.className = 'userItem'
        divElem.innerHTML = `
            <div class="image">
                <img src=${profileUrl} alt="error loading image">
            </div>
            <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
        `
        userContainer.append(divElem);
    })
}

renderUsers(users); // initial render

function handleSearch(e) {
    let searchValue = e.target.value;
    let filteredUsers = users.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filteredUsers)
}

searchInput.addEventListener('input', handleSearch)
