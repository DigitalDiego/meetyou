const homeBtn = document.getElementById('home-btn')
    sideMenuBtn = document.getElementById('side-menu-btn');
    sideMenu = document.getElementById('side-menu');
    friendsBtn = document.getElementById('friends-btn');
    friendsSection = document.getElementById('friends-section');
    feedBtn = document.getElementById('feed-btn');
    feedSection = document.getElementById('feed');
    statuses = document.querySelectorAll('.status');
    postSectionBtn = document.getElementById('post-section-btn')
    postSection = document.getElementById('post-section');
    closePostSectionBtn = document.getElementById('close-post-section-btn');
    postName = document.getElementById('post-name');
    postContent = document.getElementById('post-text');
    postBtn = document.getElementById('post-btn');
    findFriendsSection = document.getElementById('find-friends-section')
    findFriendsSectionBtn = document.getElementById('open-find-friends-section-btn');
    closeFindFriendsSectionBtn = document.getElementById('close-find-friends-section-btn');
    addFriendBtns = document.querySelectorAll('.add-friend-btn');
    notificationsSectionBtn = document.getElementById('notifications-section-btn');
    notificationsSection = document.getElementById('notifications-section');
    closeNotificationsSectionBtn = document.getElementById('close-notifications-section-btn');
    deleteNotiBtns = document.querySelectorAll('.delete-noti-btn');
    mobileLogOut = document.getElementById('mobile-log-out');
    navNotifications = document.getElementById('nav-notifications');
    navPost = document.getElementById('nav-post');
    navLogout = document.getElementById('nav-logout');
homeBtn.addEventListener('click', () => {
    feed.style.display = 'inline-block';
    friendsSection.style.display = 'none';
})
sideMenuBtn.addEventListener('click', () => {
    sideMenuBtn.classList.toggle('active-side-menu-btn');
    sideMenu.classList.toggle('active-side-menu');
})
findFriendsSectionBtn.addEventListener('click', () => {
    findFriendsSection.style.display = 'flex';
    sideMenuBtn.classList.remove('active-side-menu-btn')
    sideMenu.classList.remove('active-side-menu');
})
closeFindFriendsSectionBtn.addEventListener('click', () => {
    findFriendsSection.style.display = 'none';
})
addFriendBtns.forEach((btn) => {
    const container = btn.parentElement;
    const friend = container.parentElement;
    btn.addEventListener('click', () => {
        friend.remove();
        // Container
        const pendingFriend = document.createElement('div');
        pendingFriend.classList.add('friend');
        friendsSection.appendChild(pendingFriend);
        // Image
        const pendingFriendImage = document.createElement('div');
        pendingFriendImage.innerHTML = friend.childNodes[1].innerHTML;
        pendingFriendImage.classList.add('friend-image');
        pendingFriend.appendChild(pendingFriendImage)
        // Name
        const pendingFriendName = document.createElement('div');
        pendingFriendName.classList.add('friend-name');
        pendingFriend.appendChild(pendingFriendName)
        const name = document.createElement('p');
        name.innerHTML = friend.childNodes[3].innerHTML;
        pendingFriendName.appendChild(name);
        // Pending Message
        const pending = document.createElement('div');
        pending.classList.add('status-div');
        pending.innerHTML = 'Sent';
        pendingFriend.appendChild(pending);
        // Set Status
        const setFriend = document.createElement('div');
        setFriend.classList.add('status');
        setFriend.classList.add('set-status');
        setFriend.classList.add('none')
        setFriend.style.background = 'limegreen';
        setFriend.style.boxShadow = '0px 0px 10px limegreen';
        pending.appendChild(setFriend);
        // If Statement
        const setSelector = [0, 1];
        const setI = Math.floor(Math.random() * setSelector.length);
        setInterval(() => {
            if(setI === 0){
                pending.innerHTML = `<div class='status set-status'></div>`;
                setFriend.classList.remove('none');
                // Set Interval 
                setInterval(() => {
                    const setStatuses = document.querySelectorAll('.set-status');
                    setStatuses.forEach((status) => {
                        const setSelector = [0, 1];
                        const setColors = ['limegreen', 'crimson'];
                        const setI = Math.floor(Math.random() * setSelector.length);
                        status.style.background = setColors[setI];
                        status.style.boxShadow = `0px 0px 10px ${setColors[setI]}`;
                    })
                }, 5000)
            } else {
                pendingFriend.remove();
            }
        }, 5000)
    })
})
notificationsSectionBtn.addEventListener('click', () => {
    notificationsSection.style.display = 'flex';
    sideMenuBtn.classList.remove('active-side-menu-btn');
    sideMenu.classList.remove('active-side-menu');
})
deleteNotiBtns.forEach((btn) => {
    const container = btn.parentElement;
    const noti = container.parentElement;
    btn.addEventListener('click', () => {
        noti.remove();
    })
})
closeNotificationsSectionBtn.addEventListener('click', () => {
    notificationsSection.style.display = 'none';
})
mobileLogOut.addEventListener('click', () => {
    window.open('login.html');
    window.close();
})
friendsBtn.addEventListener('click', () => {
    friendsSection.style.display = 'inline-block'
    feed.style.display = 'none'
})
statuses.forEach((status) => {
    const selector = [0, 1];
    const onOrOff = ['limegreen', 'crimson'];
    const i = Math.floor(Math.random() * selector.length);
    status.style.background = onOrOff[i];
    status.style.boxShadow = `0px 0px 10px ${onOrOff[i]}`;
})
setInterval(() => {
    statuses.forEach((status) => {
        const selector = [0, 1];
        const onOrOff = ['limegreen', 'crimson'];
        const i = Math.floor(Math.random() * selector.length);
        status.style.background = onOrOff[i];
        status.style.boxShadow = `0px 0px 10px ${onOrOff[i]}`;
    })
}, 5000)
feedBtn.addEventListener('click', () => {
    feed.style.display = 'inline-block';
    friendsSection.style.display = 'none'
})
postSectionBtn.addEventListener('click', () => {
    postSection.style.display = 'flex';
})
closePostSectionBtn.addEventListener('click', () => {
    postSection.style.display = 'none';
})
const postTemplate = (data) => {
    feed.insertAdjacentHTML('beforeend', 
    `
    <div class="post">
        <div class="top-row">
            <div class="image">
                <i class='fas fa-user'></i>
            </div>
            <p>${data.user}</p>
        </div>
        <div class="content">
            <p>${data.text}</p>
        </div>
        <div class="bottom-row">
            <div>
                <i class="fas fa-thumbs-up"></i>
                <p>0</p>
            </div>
            <div>
                <i class="fas fa-comment-dots"></i>
                <p>0</p>
            </div>
        </div>
    </div>
    `)
}
const addPost = (event) => {
    const data = {
        user:`${postName.value}`,
        text: `${postContent.value}`
    }
    event.preventDefault();
    if(postContent.value.length < 1)return;
    postTemplate(data);
    postName.value = '';
    postContent.value = '';
    postSection.style.display = 'none';
}
postBtn.addEventListener('click', addPost);
navNotifications.addEventListener('click', () => {
    notificationsSection.style.display = 'flex';
})
navPost.addEventListener('click', () => {
    postSection.style.display = 'flex';
})
navLogout.addEventListener('click', () => {
    window.open('login.html');
    window.close();
});