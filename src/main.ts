import * as core from '@actions/core'
import {context} from '@actions/github'

async function run(): Promise<void> {
  const message = core.getInput('message')
  core.warning(context.repo.owner)
  core.warning(`${context.payload.pull_request?.number}`)
  core.warning(message)
}

run()
