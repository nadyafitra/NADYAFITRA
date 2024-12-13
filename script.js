<button id="myButton">Klik Saya</button>
<script>
    const button = document.getElementById("myButton");
    button.addEventListener("click", () => {
        button.style.backgroundColor = "blue";
        alert("Tombol telah diklik!");
    });
</script>
