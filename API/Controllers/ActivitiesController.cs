using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]//Activities/Id
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id= id});
        }
        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
        }
        [HttpPut("{Id}")]
        public async Task<IActionResult> EditActivity(Guid Id, Activity activity)
        {
            activity.Id = Id;
            return Ok(await Mediator.Send(new Edit.Command {Activity = activity}));
        }
        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteActivity(Guid Id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = Id}));
        }
    }
}