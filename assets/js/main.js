document.addEventListener('DOMContentLoaded', () => {
    const atributionContainer = document.createElement('footer');
    atributionContainer.className = "atribution-container";
    atributionContainer.innerHTML = `
    <div class="attribution">
        <p>
            Coded by <a href="https://github.com/keinermendoza">Keiner Mendoza</a>.
        </p>
        <div class="attribution-footer">
            <button onClick="closeMessage()" >Close</button>
        </div>    
    </div>
    `;
    document.body.appendChild(atributionContainer)

})


function closeMessage() {
    const atributionContainer = document.querySelector('.atribution-container');
    atributionContainer.remove();
}
