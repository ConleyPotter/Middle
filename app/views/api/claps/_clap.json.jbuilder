json.extract! clap, :id, :likeable_id

# json.set! :clapper_username, user.username

def parse_date(timeObj)
  months = {
    1 => "January",
    2 => "February",
    3 => "March",
    4 => "April",
    5 => "May",
    6 => "June",
    7 => "July",
    8 => "August",
    9 => "September",
    10 => "October",
    11 => "November",
    12 => "December",
  }
  monthNumber = timeObj.month
  dayOfTheMonth = timeObj.day
  return "#{months[monthNumber]} #{dayOfTheMonth}"
end

json.set! :dateClapped, parse_date(clap.created_at)