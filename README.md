# n8n-nodes-moodle
This is an n8n community node. It lets you use [Moodle](https://moodle.org/) in your n8n workflows through the Moodle REST api.

Moodle is a learning management system for creating and delivering online courses. It provides tools for course management, student enrollment, grading, and collaboration.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

We currently support the following API calls, but more will be added in future versions as this is still being developped:

- core_course_get_categories
- core_course_create_categories
- core_course_get_courses
- core_course_get_courses_by_field
- core_course_duplicate_course


## Credentials

You need to provide following credentials:
- Moodle URL (eg. https://yourmoodlesite.com)
- Moodle REST API token (wstoken). See https://docs.moodle.org/501/en/Using_web_services

## Compatibility

This node was tested against n8n v2.4.8

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* _Link to app/service documentation._




