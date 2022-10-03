// Initialize dotenv
require('dotenv').config()

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents } = require('discord.js')
const { Connection, Keypair, LAMPORTS_PER_SOL } = require('@solana/web3.js')

// connection
const connection = new Connection('https://api.devnet.solana.com')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

const feePayer = Keypair.fromSecretKey(
  bs58.decode('HEL1XsYiMfiTaerfzCcXDiqSGbNfdwznsxGH5WjCxxFV) '),
)

client.on('ready', () => {
  console.log(
    `Logged in as ${
      connection.getBalance(feePayer.publicKey) / LAMPORTS_PER_SOL
    }!`,
  )
})

// Log In our bot
client.login(process.env.CLIENT_TOKEN)
