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

    // Usage: by ID
