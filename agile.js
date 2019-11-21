function agile(tickets: Tickets, developers:Developer[], manager:Manager){
    while(tickets.count>0){
        for (developer in developers){
            if (developer.dead){
                developers.remove(developer);
                const newHorse: Developer = HR.hire('devloper');
                developers.add(newHorse);
                developer = newHorse;
            }
        }

        for (developer in developers){
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
