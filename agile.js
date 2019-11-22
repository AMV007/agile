function agile(tickets: Ticket[], developers:Developer[], manager:Manager){
    while(tickets.count>0){

        for (developer in developers){

            if (developer.dead){
                const newHorse: Developer = HR.hire('developer');
                developers[developers.indexOf(developer)] = newHorse;
            }

            if(developer.busy){
                if(developer.StoryPoints > (developer.StoryPointsEstimate*5)){
                    manager.kick(developer);
                    manager.drink();
                    developer.busy = false;
                    developer.last_ticket = null;
                }
            }
            if(!developer.busy){
                if(developer.last_ticket!=null){
                    tickets.remove(developer.last_ticket);
                }
            }
        }

        for (ticket in tickets){
            for (developer in developers){
                if(!developer.busy){
                    developer.startResolveNextTicket(ticket);
                }
            }
        }
    }
}
