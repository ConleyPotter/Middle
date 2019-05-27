# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

guest = User.create(username: "guest", email: "guest@guest.com", password: "password123")
guest.profile_picture.attach(io: File.open("/Users/conleypotter/Desktop/lasers.png"), filename: "lasers.png")

Article.destroy_all

article1 = Article.create(topic_category: "Chinese Literature", author_id: guest.id, title: "Trauma in Mo Yan’s Frog", byline: "How the One-Child Policy Traumatized the Main Characters", body: "Upon finishing Mo Yan’s Frog, one is struck by its use of magical realism, the complex, and at times convoluted structure, and the use of far-fetched allegories. However, one of the most important aspects of the novel, that undercuts and encompasses many of the aforementioned aspects, is trauma. Frog plots spans several decades, decades where the most drastic policies were enacted by the Chinese Communist Party and tumultuous events transpired due to the Party’s rise. These events included the Great Leap Forward, the Cultural Revolution, the Reform and Opening-Up (改革开放), and the One-Child Policy. The One-Child Policy had tremendous implications for the everyday lives of the Chinese citizens, including the fictitious characters of Frog, and had vast implications for the narrative. These implications included Gugu and Little Lion being forced to carry out thousands of abortions, including the abortion of Tadpole’s baby, which led to Renmei’s death. The implications of these events reverberate throughout the book and end up shaping the plot’s development by causing a greater or lesser extent of trauma to be inflicted on three major characters: Gugu, Little Lion, and Tadpole.")
article2 = Article.create(topic_category: "English Literature", author_id: guest.id, title: "Postcolonial Theory and The Tempest", byline: "Does Cultural Freedom Equate “Political” Freedom?", body: "In William Shakespeare’s The Tempest, the island that the play takes place on is a mysterious place, a place inhabited by magical spirits and creatures, natives and visitors with visions of conquest, visions of power, visions of a utopian existence. The relationship between the natives of the islands and these visitors poses important questions about the place of postcolonial theory in the context of The Tempest. In light of these questions, I posit that, according to the framework laid out by postcolonial scholar Homi K. Bhabha in his essay “The Postcolonial and the Postmodern: The Question of Agency”, the island of The Tempest functions as an interstice – “the overlap and displacement of domains and difference” or “spaces [that] provide the terrain for elaborating strategies of selfhood” (Bhabha, “The Postcolonial” 765). By proving that the island is in fact a place where characters define themselves, or, as Bhabha would put it, “elaborate strategies of selfhood”, I will causally prove that the island is indeed an “in-between space,” or in other words, an interstice.")
article1.cover_photo.attach(io: File.open("/Users/conleypotter/Desktop/frog.jpg"), filename: "frog.jpg")
article2.cover_photo.attach(io: File.open("/Users/conleypotter/Desktop/shakespeare.jpg"), filename: "shakespeare.jpg")