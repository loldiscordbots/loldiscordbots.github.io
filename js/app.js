addClickEvents();

function addClickEvents() {
  var container = document.getElementById("profile_container");
  container.onclick = function(e) {
	if (e.target !== this) return;
	
	closeProfile(container);
  };
  
  var cards = document.getElementsByClassName("champion_card");
  for(var i = 0; i < cards.length; i++) {
	var card = cards.item(i);
	
    card.onclick = function(e) {
	  var child = e.target;
	  while(!child.classList.contains('champion_card')) {
		child = child.parentElement;
	  }
	  
	  openProfile(child);
	};
  }
}

function openProfile(card) {
  var name = card.querySelector('div[class="champion_card_text"]').innerText;
  var icon = card.querySelector('div[class="champion_card_icon"]').style.backgroundImage;
  var description = card.querySelector('div[class="champion_card_description"]').innerText;
  var id = card.querySelector('div[class="champion_card_id"]').innerText;
  
  var container = document.getElementById("profile_container");
  
  container.querySelector('span[class="profile_name"]').innerText = name;
  container.querySelector('div[class="profile_icon"]').style.backgroundImage = icon;
  container.querySelector('div[class="profile_content"]').innerText = description;
  container.querySelector('a[class="invite_button"]').href = "https://discord.com/oauth2/authorize?client_id="+id+"&scope=bot";
  
  container.style.display = "flex";
}

function closeProfile(container) {
  container.style.display = "none";
}