// Loan calculator
const fmtPKR = t => isFinite(t) ? new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0
}).format(t) : "—";

function calcEMI(t, e, n) {
    const m = e / 100 / 12;
    if (0 === m) return t / n;
    const u = Math.pow(1 + m, n);
    return t * m * u / (u - 1)
}
const form = document.getElementById("emiForm"),
resetBtn = document.getElementById("resetBtn");

function render() {
    const t = Number(document.getElementById("amount").value),
    e = Number(document.getElementById("rate").value),
    n = Number(document.getElementById("months").value),
    m = Number(document.getElementById("fee").value);
    if (!t || !n) return;
    const u = calcEMI(t, e, n),
    o = u * n,
    d = o - t,
    c = o + (m || 0);
    document.getElementById("emiOut").textContent = fmtPKR(u), document.getElementById("interestOut").textContent = fmtPKR(d), document.getElementById("totalOut").textContent = fmtPKR(o), document.getElementById("grandOut").textContent = fmtPKR(c)
}
form.addEventListener("submit", t => {
    t.preventDefault(), render()
}), resetBtn.addEventListener("click", () => {
    document.getElementById("amount").value = 5e5, document.getElementById("rate").value = 20, document.getElementById("months").value = 24, document.getElementById("fee").value = 0, document.getElementById("emiOut").textContent = "—", document.getElementById("interestOut").textContent = "—", document.getElementById("totalOut").textContent = "—", document.getElementById("grandOut").textContent = "—"
});