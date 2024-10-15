import { notifications } from "$lib/store/svelte_store";

// Määrame vajaliku listi
let list = ['🔴', '🟡', '🟢', '⚪'];

// Salvestame originaalsete logide referentsi
const originalConsoleLog = console.log;

// Ülekirjutame console.log meetodi
console.log = function(...args) {

  // Saame praeguse aja
  const date = new Date();
  
  // Saame kellaaja (HH:MM)
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  // Saame kuupäeva (dd.mm.yyyy)
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Kuud on nullist alates
  const year = date.getFullYear();

  // Koos kellaajaga
  let aeg = `${hours}:${minutes} ${day}.${month}.${year}`;

  // Kontrollime, kas esimene argument on listis
  let show = list.includes(args[0]) ? args[0] : null;
  
  // Eemaldame esimese elemendi args array'st, et ülejäänud saaks msg'iks
  let msg = show ? args.slice(1) : args;

  // Salvesta logikirjed array'sse koos 'show' ja 'msg' väärtusega
  notifications.update(currentLogs => [
    ...currentLogs, 
    { new: true, msg, aeg, show }
  ]);

  // Kutsu originaalne console.log, et logida need ka tavalisse konsooli
  originalConsoleLog.apply(console, args);
};
