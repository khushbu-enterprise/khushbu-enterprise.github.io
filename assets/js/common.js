// Our links array
    var other = [
      { name: 'Blogs', link: 'blogs.html' },
    ];

var pagelinks = [
      { name: 'Blogs', link: 'blogs.html' },
      { name: 'About', link: 'about.html' },
      { name: 'Contact', link: 'index.html#contactus' },
    ];

    // Reusable function
    function appendMenuItems(ulOrId, items) {
      var ul = (typeof ulOrId === "string") ? document.getElementById(ulOrId) : ulOrId;
      if (!ul) return;

      // Clear old items
      ul.innerHTML = "";

      // Add new items
      items.forEach(function(item) {
        var li = document.createElement("li");
        li.className = "lh-lg";

        var a = document.createElement("a");
        a.className = "text-500";
        a.href = item.link;
        a.textContent = item.name;

        li.appendChild(a);
        ul.appendChild(li);
      });
    }





  const webAppUrl = 'https://script.google.com/macros/s/AKfycbxtDeRg4XHtJtrQh5TZIp3BP3W7iGNk7blG33ttTg8FzecxgaSr9gzSzKkzCcspGwFCSg/exec'; // Replace with your Web App URL

// Subscribe Form Submit
document.getElementById('gform').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  data.formType = "subscribe";

  fetch(webAppUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    document.getElementById('response').innerText = "✅ Subscribed successfully!";
    e.target.reset();
  }).catch(err => console.error(err));
});

// Contact Form Submit
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  data.formType = "contact";

  fetch(webAppUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    document.getElementById('response').innerText = "✅ Message sent successfully!";
    e.target.reset();
  }).catch(err => console.error(err));
});

    // Usage: by ID
