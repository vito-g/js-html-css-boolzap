/*Milestone 1
•	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
•	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Obiettivo
Sviluppare la prima milestone del nostro personalissimo whatsapp web (boolzapp)
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Copiate nel vostro data l'array di oggetti contacts, che trovate nella cartella drive, oppure qui in allegato.
La cartella con il documento (che comprende al momento solo la prima milestone) è qui https://drive.google.com/drive/u/1/folders/1Gy9-JSi8OKpv3bK8JKhkYIvsOgd3FhsU
Popoleremo il documento di volta in volta, con l'aggiunta delle nuove milestone.
Nella cartella troverete le immagini, uno screen di riferimento e infine il video per capire al meglio come risponde la pagina ai vari resize del browser.
// -------------------------------------------------
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
------------------------------------------------------
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
-------------------------------------------------------
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)*/

new Vue({

 el: '#root',
 data: {
   activeIndex: 0,
   message: '',
   contactText: '',
   contacts: [
	{
		name: 'Michele',
		avatar: 'img/avatar_1.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: 'img/avatar_2.jpg',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: 'img/avatar_3.jpg',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: 'img/avatar_4.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],
	},
],
  user: {
      name: 'Nome Utente',
      avatar: 'img/avatar_io.jpg',
      visible: true,
      messages: [
        {
          date: '23/12/2020 19:50:00',
          text: '',
          status: 'received'
        }
      ],
    }
},

 methods: {

   clickedConversation: function(index) {
     this.activeIndex = index;
   },

   lastAccessFx: function(index) {
     let lastMsgObjectIndex = this.contacts[index].messages.length - 1;
     return this.contacts[index].messages[lastMsgObjectIndex].date;
   },

   currentDate: function() {
     let today = new Date();
     let dateString = today.toLocaleString().replace(',','');
     return dateString;
   },

   sendMessageFx: function(index) {
     this.contacts[index].messages.push({
       date: this.currentDate(),
       text: this.message,
       status: 'sent'
     });
     this.message = '';
     let contact = this.contacts;
     let that = this;
     setTimeout(function(){
      contact[index].messages.push({
        date: that.currentDate(),
        text: 'ok',
        status: 'received'
      });
    }, 1000);
  },

  searchForContactFx: function() {
    this.contacts.forEach((element) => {
      if (element.name.toLowerCase().includes(this.contactText.toLowerCase())) {
        element.visible = true;
      } else {
        element.visible = false;
      }
    });
  }

 }
});

Vue.config.devtools = true;
