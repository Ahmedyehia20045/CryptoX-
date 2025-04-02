// Sidebar Toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Points System
let points = 0;
document.getElementById('points').innerText = points;
if (document.getElementById('dashboard-points')) {
    document.getElementById('dashboard-points').innerText = points;
}

function addPoints(amount) {
    points += amount;
    document.getElementById('points').innerText = points;
    if (document.getElementById('dashboard-points')) {
        document.getElementById('dashboard-points').innerText = points;
    }
    alert(`You earned ${amount} points! Total: ${points}`);
}