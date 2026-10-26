'use strict';
// Case-study text and media. Empty videos arrays stay hidden until real footage is added.
window.PROJECT_DETAILS = [
  {
    "id": "limbo",
    "slug": "limbo",
    "title": {
      "zh": "Limbo · 边缘世界",
      "en": "Limbo"
    },
    "kicker": {
      "zh": "环境叙事 / 关卡设计",
      "en": "ENVIRONMENTAL STORYTELLING / LEVEL DESIGN"
    },
    "summary": {
      "zh": "让空间讲故事，让探索推动进度。",
      "en": "Let spaces tell the story, and exploration move it forward."
    },
    "intro": {
      "zh": "主角困在由记忆与欲望构成的边缘世界。玩家穿过锈蚀的房屋、木桩防线和金色迷宫，寻找四个套娃，拼回被忽略的家庭记忆，最终打开出口。",
      "en": "A protagonist is trapped in a limbo shaped by memory and desire. Players explore rusted rooms, wooden defenses, and a golden maze, collecting four nesting dolls to reconstruct neglected family memories and open the exit."
    },
    "hero": "assets/limbo.png",
    "heroCaption": {
      "zh": "Limbo 的场景与探索空间。",
      "en": "An exploration space in Limbo."
    },
    "tags": [
      "Unity",
      "C#",
      "关卡设计 / Level design"
    ],
    "facts": [
      {
        "title": {
          "zh": "项目方向",
          "en": "FOCUS"
        },
        "text": {
          "zh": "环境叙事、空间引导与收集解谜",
          "en": "Environmental storytelling, spatial guidance, and collectible puzzles"
        }
      },
      {
        "title": {
          "zh": "我的工作",
          "en": "MY WORK"
        },
        "text": {
          "zh": "关卡搭建、玩法脚本与场景流程",
          "en": "Level building, gameplay scripts, and scene flow"
        }
      },
      {
        "title": {
          "zh": "实现工具",
          "en": "TOOLS"
        },
        "text": {
          "zh": "Unity / C#",
          "en": "Unity / C#"
        }
      }
    ],
    "sections": [
      {
        "id": "spaces",
        "title": {
          "zh": "三个场景，三种内心状态",
          "en": "Three spaces, three states of mind"
        },
        "lead": {
          "zh": "场景中的材质、障碍与物件对应主角的经历。玩家通过走过这些空间理解故事。",
          "en": "Materials, obstacles, and objects connect the spaces to the protagonist’s past. The story is encountered through exploration."
        },
        "cards": [
          {
            "title": {
              "zh": "锈蚀的记忆",
              "en": "Rusted Memories"
            },
            "text": {
              "zh": "巨大的旧屋被荆棘侵入，糖果和温暖的壁画仍留在远处。家庭曾经存在，记忆却被长期忽略。",
              "en": "Thorns overtake a rusted house, while candy and warm murals remain visible. Signs of family life survive inside neglected memories."
            }
          },
          {
            "title": {
              "zh": "隐藏的欲望",
              "en": "Hidden Desire"
            },
            "text": {
              "zh": "金色亭台与层层木桩把财富围起来。原本供人停留的空间变成防御，表现主角对占有的执着。",
              "en": "Golden pavilions and layers of stakes protect hidden wealth. A place of rest becomes a defensive enclosure."
            }
          },
          {
            "title": {
              "zh": "金色迷宫",
              "en": "Golden Maze"
            },
            "text": {
              "zh": "迷宫把欲望变成路线选择与方向感的挑战；探索的目标仍然是找到代表家庭记忆的套娃。",
              "en": "The maze turns desire into a navigation challenge. The goal remains a nesting doll representing a family memory."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/limbo-rusted.webp",
            "caption": {
              "zh": "锈蚀房屋：用破败与残留的生活物件表达记忆。",
              "en": "Rusted rooms: decay contrasts with traces of domestic life."
            }
          },
          {
            "src": "assets/projects/limbo-golden.webp",
            "caption": {
              "zh": "金色迷宫的 Unity 场景布局。",
              "en": "The golden maze layout in Unity."
            }
          },
          {
            "src": "assets/projects/limbo-childhood.webp",
            "caption": {
              "zh": "玩家视角下的探索场景与物件线索。",
              "en": "An in-game view of the environment and its clues."
            }
          }
        ]
      },
      {
        "id": "guidance",
        "title": {
          "zh": "玩家怎样找到下一步",
          "en": "How the player finds the next step"
        },
        "lead": {
          "zh": "我把灯光、可见目标、物件摆放和空间构图结合起来，让探索始终有可以追踪的线索。",
          "en": "I combine lighting, visible targets, object placement, and spatial composition to keep the next clue within reach."
        },
        "flow": {
          "zh": [
            "观察地标与光线",
            "接近线索",
            "找到并收集套娃",
            "回到出口",
            "集齐后开启大门"
          ],
          "en": [
            "Read landmarks and light",
            "Approach a clue",
            "Collect a doll",
            "Return to the exit",
            "Complete the set to open the gate"
          ]
        },
        "cards": [
          {
            "title": {
              "zh": "远处可见的目标",
              "en": "Visible destinations"
            },
            "text": {
              "zh": "套娃发光、浮动箭头与场景灯光帮助玩家发现目标；喷泉附近的声音提示补充视觉信息。",
              "en": "Glowing dolls, floating arrows, and lighting indicate destinations. A voice near the fountain adds an audio cue."
            }
          },
          {
            "title": {
              "zh": "贯穿关卡的收集目标",
              "en": "A continuous collection goal"
            },
            "text": {
              "zh": "四个套娃分布在不同位置。玩家把记忆碎片带回出口，收集结果与最终开门条件保持关联。",
              "en": "Four dolls are distributed across different locations. Their collection connects exploration to the final gate condition."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/limbo-dolls.webp",
            "caption": {
              "zh": "出口附近的套娃展示，把收集进度变成场景中的可见反馈。",
              "en": "Dolls near the exit make collection progress visible in the world."
            }
          }
        ]
      },
      {
        "id": "implementation",
        "title": {
          "zh": "把关卡连成可玩的流程",
          "en": "Connecting the spaces into a playable flow"
        },
        "lead": {
          "zh": "我用 C# 将角色移动、谜题激活、收集状态与场景切换接起来。技术服务于关卡节奏，也让玩家的进度能在不同区域之间延续。",
          "en": "C# gameplay logic connects movement, puzzle activation, collectible states, and scene transitions, keeping progression consistent across areas."
        },
        "cards": [
          {
            "title": {
              "zh": "角色与重生",
              "en": "Movement and respawn"
            },
            "text": {
              "zh": "用 AddForce 与 Lerp 调整移动反馈，并设置危险区域和重生点，支撑平台跳跃与探索。",
              "en": "AddForce and Lerp support character movement, with hazard zones and respawn anchors for platforming and exploration."
            }
          },
          {
            "title": {
              "zh": "收集状态",
              "en": "Collection state"
            },
            "text": {
              "zh": "通过列表与映射记录套娃的收集状态，更新出口展示，并在条件满足后激活最终谜题。",
              "en": "Lists and mappings track collected dolls, update their display at the exit, and activate the final puzzle."
            }
          },
          {
            "title": {
              "zh": "场景流程",
              "en": "Scene flow"
            },
            "text": {
              "zh": "使用 Coroutine 处理场景加载，把菜单、探索区域和结束页面串成完整流程。",
              "en": "Coroutine-based scene loading connects menus, exploration areas, and the ending."
            }
          }
        ]
      }
    ],
    "links": [
      {
        "url": "https://limbohu.creght.site/",
        "label": {
          "zh": "打开项目网站",
          "en": "Open project website"
        }
      },
      {
        "url": "https://github.com/siempre-2004/Limbo",
        "label": {
          "zh": "查看源代码",
          "en": "Source code"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "echoes",
    "slug": "echoes-of-silence",
    "title": {
      "zh": "Echoes of Silence",
      "en": "Echoes of Silence"
    },
    "kicker": {
      "zh": "叙事解谜 / Unreal Engine",
      "en": "NARRATIVE PUZZLES / UNREAL ENGINE"
    },
    "summary": {
      "zh": "把记忆碎片，变成解开房间的线索。",
      "en": "Turn fragments of memory into clues that unlock a room."
    },
    "intro": {
      "zh": "一款以潜意识和记忆重建为主题的第一人称团队解谜游戏。三个房间分别通过滑块、故事柜与摩斯电码，让玩家从观察空间走向理解主角的经历。",
      "en": "A team-built first-person puzzle game about the subconscious and reconstructing memory. Three rooms use a sliding lock, a story cabinet, and Morse code to connect spatial exploration with the protagonist’s past."
    },
    "hero": "assets/projects/echoes-environment-reveal.webp",
    "heroCaption": {
      "zh": "游戏实录截图：玩家在房间里探索记忆线索。",
      "en": "Gameplay capture: exploring memory clues inside a room."
    },
    "tags": [
      "Unreal Engine",
      "Blueprint",
      "团队项目 / Team project"
    ],
    "facts": [
      {
        "title": {
          "zh": "游戏形式",
          "en": "FORMAT"
        },
        "text": {
          "zh": "第一人称 / 叙事解谜 / 三个房间",
          "en": "First-person / narrative puzzles / three rooms"
        }
      },
      {
        "title": {
          "zh": "我的工作",
          "en": "MY WORK"
        },
        "text": {
          "zh": "叙事脚本、Blueprint 交互逻辑、原创音乐",
          "en": "Narrative scripting, Blueprint interactions, and original music"
        }
      },
      {
        "title": {
          "zh": "协作范围",
          "en": "TEAM CONTEXT"
        },
        "text": {
          "zh": "谜题与场景作为团队成果展示",
          "en": "Puzzles and environments shown as team outcomes"
        }
      }
    ],
    "sections": [
      {
        "id": "puzzles",
        "title": {
          "zh": "三个房间，三种解谜方式",
          "en": "Three rooms, three ways to solve a puzzle"
        },
        "lead": {
          "zh": "玩家先理解位置和形状，再整理文字与逻辑，最后通过声音解码。每个房间用不同的信息形式推进故事。",
          "en": "The experience moves from positions and shapes to text and logic, then to decoding sound. Each room advances the story through a different kind of information."
        },
        "cards": [
          {
            "title": {
              "zh": "01 · 滑块锁",
              "en": "01 · Sliding Lock"
            },
            "text": {
              "zh": "移动锁块、观察空位与位置关系，找到隐藏的钥匙。第一次解锁对应进入被掩埋的记忆。",
              "en": "Move the lock blocks, read spatial relationships, and uncover a hidden key: the first step into buried memories."
            }
          },
          {
            "title": {
              "zh": "02 · 故事柜",
              "en": "02 · The Story Cabinet"
            },
            "text": {
              "zh": "阅读散落的信件与编号便条，把分散的叙事信息联系起来，理解柜子与主角过去的关系。",
              "en": "Read scattered letters and numbered notes, connect narrative fragments, and relate the cabinet to the protagonist’s past."
            }
          },
          {
            "title": {
              "zh": "03 · 摩斯电码",
              "en": "03 · Morse Code"
            },
            "text": {
              "zh": "从留声机的声音信号中辨认编码，结合线索寻找最后的通路。声音同时承担氛围与解谜信息。",
              "en": "Decode signals from a gramophone and use the clues to find the final passage. Sound carries both atmosphere and puzzle information."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/echoes-bookcase-clue.webp",
            "caption": {
              "zh": "书柜旁的叙事文字，让场景中的物件与人物记忆发生联系。",
              "en": "Narrative text beside the bookcase connects an object to a personal memory."
            }
          },
          {
            "src": "assets/projects/echoes-final-password.webp",
            "caption": {
              "zh": "输入密码后的正确提示，明确告诉玩家这一步已经完成。",
              "en": "A correct-password response confirms that this step is complete."
            }
          }
        ]
      },
      {
        "id": "work",
        "title": {
          "zh": "我的工作：叙事、交互与声音",
          "en": "My work: story, interaction, and sound"
        },
        "lead": {
          "zh": "我编写叙事脚本、搭建部分 Blueprint 交互与谜题逻辑，并创作游戏音乐，把线索阅读、操作反馈与声音连接到解谜过程。",
          "en": "I wrote narrative material, helped build Blueprint interactions and puzzle logic, and composed music. The overall puzzle structure is a team outcome; these are my specific areas of contribution."
        },
        "flow": {
          "zh": [
            "观察场景",
            "尝试操作",
            "获得视听反馈",
            "理解线索",
            "推进故事"
          ],
          "en": [
            "Observe the space",
            "Try an action",
            "Receive feedback",
            "Understand a clue",
            "Advance the story"
          ]
        },
        "cards": [
          {
            "title": {
              "zh": "让文字成为线索",
              "en": "Writing as a clue"
            },
            "text": {
              "zh": "故事碎片需要与房间、物件及解谜目标发生联系，玩家才能把读到的信息用于下一步行动。",
              "en": "Story fragments need to connect to rooms, objects, and puzzle goals so that reading can inform the next action."
            }
          },
          {
            "title": {
              "zh": "把操作接入游戏状态",
              "en": "Connecting actions and state"
            },
            "text": {
              "zh": "通过 Blueprint 中的输入、触发事件与物件状态，连接打开界面、读取线索和谜题进度。",
              "en": "Blueprint input, trigger events, and object states connect opening interfaces, reading clues, and puzzle progress."
            }
          },
          {
            "title": {
              "zh": "用音乐补充情绪",
              "en": "Supporting the mood with music"
            },
            "text": {
              "zh": "以钢琴为主的原创音乐呼应家庭记忆与主角的心理状态，和房间中的声音线索共同建立氛围。",
              "en": "Original piano music supports family memories and the protagonist’s emotional state, alongside the rooms’ audio clues."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/echoes-interactive-drawer.webp",
            "caption": {
              "zh": "抽屉的高亮边框与 E 键提示，帮助玩家找到可操作的物件。",
              "en": "An outlined drawer and E-key prompt mark an interactive object."
            }
          },
          {
            "src": "assets/projects/echoes-narrative-note.webp",
            "caption": {
              "zh": "把人物记忆放进可阅读的便条，让故事跟随探索逐步出现。",
              "en": "Readable notes reveal personal memories through exploration."
            }
          }
        ]
      },
      {
        "id": "iteration",
        "title": {
          "zh": "真实迭代：从可读文本到解谜线索",
          "en": "Documented iteration: from readable text to puzzle clues"
        },
        "lead": {
          "zh": "从 Pilot 到两轮迭代，故事便条、柜子与留声机逐步建立更明确的叙事联系。原始截图记录了这些具体变化。",
          "en": "These original iteration captures document changes to notes, the cabinet, and the gramophone."
        },
        "comparisons": [
          {
            "title": {
              "zh": "故事便条：不只把故事放在纸上",
              "en": "Notes: more than text on a page"
            },
            "text": {
              "zh": "Pilot 版把叙事作为可阅读的碎片；Iteration 1 开始让碎片记忆与房间中的空间信息联系起来。",
              "en": "The pilot presents readable narrative fragments. Iteration 1 starts connecting fragmented memory to information in the space."
            },
            "before": {
              "src": "assets/projects/echoes-01_Pilot_Notes.webp",
              "caption": {
                "zh": "Pilot · 可直接阅读的记忆便条。",
                "en": "Pilot · readable memory notes."
              }
            },
            "after": {
              "src": "assets/projects/echoes-02_Iteration1_Notes.webp",
              "caption": {
                "zh": "Iteration 1 · 记忆碎片与空间相联系。",
                "en": "Iteration 1 · memory fragments connected to the space."
              }
            }
          },
          {
            "title": {
              "zh": "故事柜：从提示位置到故事关联",
              "en": "Cabinet: from a location hint to a story connection"
            },
            "text": {
              "zh": "Iteration 1 的柜子主要提示“这里可能有线索”；Iteration 2 把书柜与主角的学习、知识和记忆联系起来，让物件承担叙事信息。",
              "en": "Iteration 1 mainly points to possible clues. Iteration 2 connects the bookcase to education, knowledge, and memory, giving the object a narrative role."
            },
            "before": {
              "src": "assets/projects/echoes-03_Iteration1_Cabinet.webp",
              "caption": {
                "zh": "Iteration 1 · 柜子作为解谜提示。",
                "en": "Iteration 1 · cabinet as a puzzle hint."
              }
            },
            "after": {
              "src": "assets/projects/echoes-04_Iteration2_Cabinet.webp",
              "caption": {
                "zh": "Iteration 2 · 柜子成为故事相关线索。",
                "en": "Iteration 2 · cabinet as a story-related clue."
              }
            }
          },
          {
            "title": {
              "zh": "留声机：把编码和人物记忆联系起来",
              "en": "Gramophone: connecting the code to a memory"
            },
            "text": {
              "zh": "Pilot 版主要提供编码表；Iteration 2 的文字进一步追问编码是否代表“她的记忆”或某个日期，给解码行为增加了人物语境。",
              "en": "The pilot mainly provides a code table. Iteration 2 asks whether the code refers to a memory of her or a date, adding personal context to decoding."
            },
            "before": {
              "src": "assets/projects/echoes-05_Pilot_Gramophone.webp",
              "caption": {
                "zh": "Pilot · 留声机主要提供编码提示。",
                "en": "Pilot · gramophone as a code hint."
              }
            },
            "after": {
              "src": "assets/projects/echoes-06_Iteration2_Gramophone.webp",
              "caption": {
                "zh": "Iteration 2 · 编码与人物记忆相联系。",
                "en": "Iteration 2 · code connected to a personal memory."
              }
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/echoes-cabinet-iteration.webp",
            "caption": {
              "zh": "Iteration 2 的柜子谜题：病例资料与记忆碎片相联系。",
              "en": "Iteration 2 cabinet puzzle: case files connected to memory fragments."
            }
          }
        ]
      }
    ],
    "links": [
      {
        "url": "https://intramentem.creght.site/",
        "label": {
          "zh": "打开项目网站",
          "en": "Open project website"
        }
      },
      {
        "url": "https://github.com/siempre-2004/IntraMentem",
        "label": {
          "zh": "查看源代码",
          "en": "Source code"
        }
      },
      {
        "url": "https://uu.diva-portal.org/smash/get/diva2:2072974/FULLTEXT01.pdf",
        "label": {
          "zh": "阅读项目论文",
          "en": "Read the project thesis"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "arcade",
    "slug": "arcade",
    "title": {
      "zh": "The Dual-Hatted Courtier · 双重身份的信使",
      "en": "The Dual-Hatted Courtier"
    },
    "kicker": {
      "zh": "自制控制器 / Unity + Arduino",
      "en": "CUSTOM CONTROLLER / UNITY + ARDUINO"
    },
    "summary": {
      "zh": "拉动一根钓竿，让屏幕里的信使行动。",
      "en": "Move a fishing rod. Guide a courier on screen."
    },
    "intro": {
      "zh": "一款结合实体控制器与屏幕游戏的团队街机作品。玩家白天是信使，夜晚潜入村庄帮助穷人：穿过守卫的巡逻路线，并通过颜色收集任务完成偷取挑战。",
      "en": "A team arcade game combining a physical controller with an on-screen stealth game. A courier serves officials by day and helps the poor at night, navigating guards and completing color-collection challenges."
    },
    "hero": "assets/arcade.jpg",
    "heroCaption": {
      "zh": "团队制作的街机装置与游戏展示。",
      "en": "The team's arcade installation and game."
    },
    "tags": [
      "Unity",
      "Arduino",
      "颜色传感器 / Color sensor",
      "团队项目 / Team project"
    ],
    "facts": [
      {
        "title": {
          "zh": "游戏形式",
          "en": "FORMAT"
        },
        "text": {
          "zh": "实体操作 + 潜行 + 限时收集",
          "en": "Physical input + stealth + timed collection"
        }
      },
      {
        "title": {
          "zh": "我的工作",
          "en": "MY WORK"
        },
        "text": {
          "zh": "输入接入、文字交互、场景逻辑与音乐",
          "en": "Input integration, text interactions, scene logic, and music"
        }
      },
      {
        "title": {
          "zh": "系统连接",
          "en": "CONNECTION"
        },
        "text": {
          "zh": "自制装置 → Arduino → Unity",
          "en": "Custom device → Arduino → Unity"
        }
      }
    ],
    "sections": [
      {
        "id": "input",
        "title": {
          "zh": "实体动作怎样进入游戏",
          "en": "How a physical action reaches the game"
        },
        "lead": {
          "zh": "装置把玩家的手部操作变成可识别的输入，再交给 Unity 触发角色或任务中的动作。颜色传感器用于识别收集任务中的目标。",
          "en": "The device turns hand movements into inputs that Unity can use for character and task actions. A color sensor identifies collection targets."
        },
        "flow": {
          "zh": [
            "操作钓竿与装置",
            "传感器读取",
            "Arduino 处理",
            "串口传给 Unity",
            "触发游戏动作"
          ],
          "en": [
            "Operate the device",
            "Read sensors",
            "Process in Arduino",
            "Send serial input to Unity",
            "Trigger a game action"
          ]
        },
        "images": [
          {
            "src": "assets/projects/arcade-device.webp",
            "caption": {
              "zh": "桌面上的装置、屏幕与连接设备。",
              "en": "The device, display, and connections on the desk."
            }
          },
          {
            "src": "assets/projects/arcade-controller.webp",
            "caption": {
              "zh": "自制控制器与线路的近距离记录。",
              "en": "A close view of the custom controller and wiring."
            }
          }
        ]
      },
      {
        "id": "prototype",
        "title": {
          "zh": "从输入想法到可用装置",
          "en": "From an input idea to a working device"
        },
        "lead": {
          "zh": "输入方式经过探索和调整：早期用摄像头与钓鱼装置尝试控制角色，之后接入颜色感应与 Arduino。计划中的 DancePad 没有进入最终方案。",
          "en": "The input design changed over time: early camera and fishing-device experiments explored movement, followed by color sensing and Arduino integration. The planned DancePad was not part of the final setup."
        },
        "cards": [
          {
            "title": {
              "zh": "先验证动作",
              "en": "Explore the action"
            },
            "text": {
              "zh": "从玩家实际拉动、移动装置的动作出发，尝试把实体操作与游戏里的行为对应起来。",
              "en": "Start with the physical action of pulling and moving the device, then explore how it maps to game behavior."
            }
          },
          {
            "title": {
              "zh": "再连接输入",
              "en": "Connect the input"
            },
            "text": {
              "zh": "编写传感器与 Arduino 相关代码，把装置读数接入 Unity，并检查输入与角色反馈是否对应。",
              "en": "Write sensor and Arduino code, connect readings to Unity, and check how inputs map to in-game feedback."
            }
          },
          {
            "title": {
              "zh": "放回完整流程",
              "en": "Integrate the experience"
            },
            "text": {
              "zh": "把输入与移动、文字提示、场景切换和收集任务接起来，使装置操作成为游戏流程的一部分。",
              "en": "Connect the inputs with movement, text prompts, scene transitions, and collection tasks."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/arcade-footage.webp",
            "caption": {
              "zh": "原项目中的实际装置操作记录。",
              "en": "Documentation of people operating the physical installation."
            }
          }
        ]
      },
      {
        "id": "gameplay",
        "title": {
          "zh": "团队完成的游戏循环",
          "en": "The team's gameplay loop"
        },
        "lead": {
          "zh": "村庄潜行和屋内收集构成一轮夜间行动，玩家需要在路线规划、限时操作和物品管理之间切换。",
          "en": "Village navigation and indoor collection form a night-time mission. These are the game's team-built mechanics."
        },
        "cards": [
          {
            "title": {
              "zh": "穿过村庄",
              "en": "Navigate the village"
            },
            "text": {
              "zh": "观察巡逻守卫和视野范围，选择路线，避免被发现。",
              "en": "Read guard patrols and vision areas, choose a route, and avoid detection."
            }
          },
          {
            "title": {
              "zh": "进入收集任务",
              "en": "Enter a collection task"
            },
            "text": {
              "zh": "进入房屋后切换任务场景，在有限时间内收集指定颜色组合；正确操作提供 LED 反馈，错误会减少可用时间。",
              "en": "Enter a house to switch to a timed task. Collect the required color combination; correct actions trigger LED feedback and mistakes reduce the available time."
            }
          },
          {
            "title": {
              "zh": "回到行动流程",
              "en": "Return to the mission"
            },
            "text": {
              "zh": "场景切换、物品状态与提示把潜行和收集连接起来，让玩家知道目前的目标。",
              "en": "Scene transitions, item states, and prompts connect stealth and collection and communicate the current goal."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/arcade-inventory.webp",
            "caption": {
              "zh": "村庄、守卫视野与室内场景的游戏记录。",
              "en": "Game documentation showing village, guard vision, and indoor spaces."
            }
          },
          {
            "src": "assets/projects/arcade-text.webp",
            "caption": {
              "zh": "颜色收集任务中的文字目标与操作提示。",
              "en": "Text prompts communicate color-collection goals and controls."
            }
          }
        ]
      },
      {
        "id": "contribution",
        "title": {
          "zh": "我具体做了什么",
          "en": "My contribution"
        },
        "cards": [
          {
            "title": {
              "zh": "装置输入与交互逻辑",
              "en": "Device input and interactions"
            },
            "text": {
              "zh": "接入 Arduino 传感器输入，编写与调试 Unity 中的相关交互，并探索装置控制角色的方法。",
              "en": "Integrate Arduino sensor input, write and debug related Unity interactions, and explore device-driven character controls."
            }
          },
          {
            "title": {
              "zh": "文字与场景流程",
              "en": "Text and scene flow"
            },
            "text": {
              "zh": "制作文字交互与提示，连接任务、物品管理和场景切换，让实体操作得到游戏中的回应。",
              "en": "Build text interactions and prompts, connecting tasks, item management, and scene transitions to in-game responses."
            }
          },
          {
            "title": {
              "zh": "原创音乐",
              "en": "Original music"
            },
            "text": {
              "zh": "使用 Logic Pro 制作轻快的钢琴音乐，并结合游戏状态调整声音氛围。",
              "en": "Compose a light piano soundtrack in Logic Pro and support changes in atmosphere across game states."
            }
          }
        ]
      }
    ],
    "links": [
      {
        "url": "https://arcadehu.creght.site/",
        "label": {
          "zh": "打开项目网站",
          "en": "Open project website"
        }
      },
      {
        "url": "https://github.com/siempre-2004/Arcade_Game",
        "label": {
          "zh": "查看源代码",
          "en": "Source code"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "prairie",
    "slug": "ai-prairie",
    "title": {
      "zh": "AI Prairie · 狼羊生态模拟",
      "en": "AI Prairie"
    },
    "kicker": {
      "zh": "C++ / 自主智能体 / 可编辑地图",
      "en": "C++ / AUTONOMOUS AGENTS / EDITABLE MAP"
    },
    "summary": {
      "zh": "让羊、狼和草地，按照各自的规则一起生活。",
      "en": "Sheep, wolves, and grass, each following their own rules."
    },
    "intro": {
      "zh": "使用 C++ 和 raylib 制作的个人项目。羊觅食、逃跑和繁殖，狼寻找并追逐目标，草地生长与恢复；玩家通过牧羊人和地图编辑影响这个持续变化的小世界。",
      "en": "An individual C++ and raylib project. Sheep seek food, escape, and reproduce; wolves find and pursue targets; grass grows and recovers. Players influence this changing world through a herder and terrain editing."
    },
    "hero": "assets/ecosystem.png",
    "heroCaption": {
      "zh": "生态模拟运行画面：智能体、网格与调试信息。",
      "en": "The running simulation, with agents, grid, and debugging information."
    },
    "tags": [
      "C++",
      "raylib",
      "FSM",
      "A*"
    ],
    "facts": [
      {
        "title": {
          "zh": "项目类型",
          "en": "PROJECT"
        },
        "text": {
          "zh": "个人技术项目",
          "en": "Individual technical project"
        }
      },
      {
        "title": {
          "zh": "核心系统",
          "en": "CORE SYSTEMS"
        },
        "text": {
          "zh": "状态机决策 / A* 寻路 / 生态更新",
          "en": "State-machine decisions / A* paths / ecosystem updates"
        }
      },
      {
        "title": {
          "zh": "可观察性",
          "en": "OBSERVABILITY"
        },
        "text": {
          "zh": "状态检查、路径显示、地图编辑",
          "en": "State inspection, path visualization, and terrain editing"
        }
      }
    ],
    "sections": [
      {
        "id": "world",
        "title": {
          "zh": "先看清这个世界怎样运转",
          "en": "How the world behaves"
        },
        "lead": {
          "zh": "同一张地图中，每个实体根据状态与周围环境行动。它们之间的影响组成可观察的生态循环。",
          "en": "Entities share a map but act according to their own states and surroundings. Their interactions form a visible ecological cycle."
        },
        "cards": [
          {
            "title": {
              "zh": "羊",
              "en": "Sheep"
            },
            "text": {
              "zh": "在游荡、吃草、逃跑和繁殖等状态之间切换。发现狼后改变目标，重新寻找安全路线。",
              "en": "Switch between wandering, eating, escaping, and reproduction. Detecting a wolf changes the target and route."
            }
          },
          {
            "title": {
              "zh": "狼",
              "en": "Wolves"
            },
            "text": {
              "zh": "寻找羊并沿路径追逐，也会与牧羊人发生交互。",
              "en": "Find sheep and follow paths toward them, while also reacting to the herder."
            }
          },
          {
            "title": {
              "zh": "草与牧羊人",
              "en": "Grass and the herder"
            },
            "text": {
              "zh": "草被吃掉后重新生长，粪便促进生长；玩家控制牧羊人移动，干预局部环境。",
              "en": "Grass regrows after being eaten and manure supports growth. The player moves a herder to affect the local environment."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/prairie-world.webp",
            "caption": {
              "zh": "草原上的实体与可行走网格。",
              "en": "Entities and the walkable grid in the prairie."
            }
          },
          {
            "src": "assets/projects/prairie-state.webp",
            "caption": {
              "zh": "点击实体后查看状态和属性。",
              "en": "Inspecting an entity's state and properties."
            }
          }
        ]
      },
      {
        "id": "fsm",
        "title": {
          "zh": "状态机决定“现在做什么”",
          "en": "The state machine decides what to do"
        },
        "lead": {
          "zh": "FSM 把行为拆成清楚的状态和切换条件。饥饿、周围目标与威胁变化时，实体切换状态，再更新移动目标。",
          "en": "A finite state machine separates behaviors and transition conditions. Hunger, targets, and threats can change the state and the movement goal."
        },
        "flow": {
          "zh": [
            "读取自身与周围状态",
            "判断切换条件",
            "确定当前行为",
            "选择目标",
            "执行与更新"
          ],
          "en": [
            "Read self and surroundings",
            "Check transitions",
            "Choose a behavior",
            "Select a target",
            "Act and update"
          ]
        },
        "images": [
          {
            "src": "assets/projects/prairie-fsm.webp",
            "caption": {
              "zh": "状态机与行为实现的原始项目记录。",
              "en": "Original project documentation of state and behavior implementation."
            }
          },
          {
            "src": "assets/projects/prairie-detection.webp",
            "caption": {
              "zh": "检测到威胁后的行为与路径变化记录。",
              "en": "Documentation of behavior and path changes after detecting a threat."
            }
          }
        ]
      },
      {
        "id": "path",
        "title": {
          "zh": "A* 解决“怎么走过去”",
          "en": "A* finds how to get there"
        },
        "lead": {
          "zh": "状态机选择目标，寻路模块计算路线。羊、狼和牧羊人使用地图上的可行走信息，目标或地图变化时更新路径。",
          "en": "The behavior system selects a goal; the pathfinding module computes a route. Sheep, wolves, and the herder use walkability data and update routes when goals or terrain change."
        },
        "cards": [
          {
            "title": {
              "zh": "比较候选节点",
              "en": "Compare candidate nodes"
            },
            "text": {
              "zh": "用 f = g + h 综合已经走过的成本与到终点的估计成本，选择下一步搜索的节点。",
              "en": "Use f = g + h to combine traveled cost with an estimate to the goal and choose the next node."
            }
          },
          {
            "title": {
              "zh": "记录与回溯",
              "en": "Track and reconstruct"
            },
            "text": {
              "zh": "记录父节点；找到终点后回溯路径，交给实体逐步移动。",
              "en": "Track parent nodes, reconstruct the path from the goal, and let the entity follow it."
            }
          },
          {
            "title": {
              "zh": "变化后重算",
              "en": "Recalculate after changes"
            },
            "text": {
              "zh": "玩家修改地形，或智能体转向新目标时，重新计算可行路线。",
              "en": "Recompute routes after terrain edits or a change of target."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/prairie-path.webp",
            "caption": {
              "zh": "地图编辑与路径重新计算的项目说明。",
              "en": "Project documentation of map editing and path recalculation."
            }
          },
          {
            "src": "assets/projects/prairie-reproduction.webp",
            "caption": {
              "zh": "繁殖规则带来的数量变化记录。",
              "en": "Population changes produced by reproduction rules."
            }
          }
        ]
      },
      {
        "id": "inspection",
        "title": {
          "zh": "让运行中的规则看得见",
          "en": "Make the rules visible"
        },
        "lead": {
          "zh": "调试模式显示网格和路径，实体检查显示当前属性，编辑模式可以改变地形。这些工具用来检查行为为何发生，也便于继续调整生态规则。",
          "en": "Debug views show the grid and paths, entity inspection shows current properties, and an editor changes terrain. Together they make behavior easier to inspect and the ecosystem easier to tune."
        },
        "controls": [
          [
            "F1",
            {
              "zh": "切换调试显示",
              "en": "Toggle the debug view"
            }
          ],
          [
            "F2",
            {
              "zh": "切换观察与编辑模式",
              "en": "Switch view and editor modes"
            }
          ],
          [
            "左键 / Left click",
            {
              "zh": "设置牧羊人目的地",
              "en": "Set a destination for the herder"
            }
          ],
          [
            "右键 / Right click",
            {
              "zh": "观察模式检查实体；编辑模式修改地图",
              "en": "Inspect entities in view mode; edit terrain in editor mode"
            }
          ]
        ]
      }
    ],
    "links": [
      {
        "url": "https://ecosystemhu.creght.site/",
        "label": {
          "zh": "打开项目网站",
          "en": "Open project website"
        }
      },
      {
        "url": "https://github.com/siempre-2004/EcoSystem_VisualStudio",
        "label": {
          "zh": "查看源代码",
          "en": "Source code"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "skytiles",
    "slug": "skytiles",
    "title": {
      "zh": "SkyTiles · 瓦片地图与相机原型",
      "en": "SkyTiles"
    },
    "kicker": {
      "zh": "C++ / raylib / 图形技术原型",
      "en": "C++ / RAYLIB / GRAPHICS PROTOTYPE"
    },
    "summary": {
      "zh": "换一张地图，也换一个观察世界的尺度。",
      "en": "A different map. A different scale of view."
    },
    "intro": {
      "zh": "基于 raylib 的 C++ 瓦片渲染原型。我实现不同规模的地图读取与切换、相机控制、可见性剔除和瓦片重排，用可操作的画面检查地图与视野之间的关系。",
      "en": "A C++ tile-rendering prototype built with raylib. I implement map loading and switching, camera controls, visibility culling, and tile redistribution to examine the relationship between a map and its view."
    },
    "hero": "assets/skytiles.png",
    "heroCaption": {
      "zh": "SkyTiles 的瓦片地图画面。",
      "en": "A tile-map view in SkyTiles."
    },
    "tags": [
      "C++",
      "raylib",
      "JSON",
      "Camera"
    ],
    "facts": [
      {
        "title": {
          "zh": "项目范围",
          "en": "SCOPE"
        },
        "text": {
          "zh": "基于 raylib 的技术原型",
          "en": "Technical prototype built on raylib"
        }
      },
      {
        "title": {
          "zh": "地图规模",
          "en": "MAP SIZES"
        },
        "text": {
          "zh": "32×32 / 128×128 / 1024×1024",
          "en": "32×32 / 128×128 / 1024×1024"
        }
      },
      {
        "title": {
          "zh": "实现重点",
          "en": "FOCUS"
        },
        "text": {
          "zh": "地图数据、相机范围与可见性",
          "en": "Map data, camera bounds, and visibility"
        }
      }
    ],
    "sections": [
      {
        "id": "pipeline",
        "title": {
          "zh": "从地图数据到屏幕",
          "en": "From map data to the screen"
        },
        "lead": {
          "zh": "JSON 保存地图与瓦片信息。程序读取后生成地图内容，再依据相机与可见范围决定绘制哪些瓦片。",
          "en": "JSON stores map and tile data. The program loads the map, then uses the camera and visible region to determine which tiles to draw."
        },
        "flow": {
          "zh": [
            "读取 JSON",
            "构建瓦片地图",
            "更新相机",
            "判断可见范围",
            "raylib 绘制"
          ],
          "en": [
            "Read JSON",
            "Build the tile map",
            "Update the camera",
            "Check visibility",
            "Draw with raylib"
          ]
        },
        "images": [
          {
            "src": "assets/projects/skytiles-large.webp",
            "caption": {
              "zh": "大地图的瓦片分布。",
              "en": "Tile distribution across a large map."
            }
          },
          {
            "src": "assets/projects/skytiles-culling.webp",
            "caption": {
              "zh": "带调试信息的地图与可见性检查画面。",
              "en": "Map and visibility inspection with debugging information."
            }
          }
        ]
      },
      {
        "id": "camera",
        "title": {
          "zh": "相机锁定与地图切换",
          "en": "Camera locking and map switching"
        },
        "lead": {
          "zh": "地图大小变化时，观察区域也需要重新约束。C 键切换范围锁定，锁定状态会跨地图切换保留，再按一次 C 才解除。",
          "en": "Changing map size also changes the relevant view constraints. C toggles camera-range locking; the lock persists across map switches until C is pressed again."
        },
        "comparisons": [
          {
            "title": {
              "zh": "相机范围的两种观察状态",
              "en": "Two views of the camera bounds"
            },
            "text": {
              "zh": "原素材中按 C 前后的画面展示了相机范围操作，以及相机与地图位置之间的关系。",
              "en": "These original before/after C-key captures document camera-range behavior."
            },
            "before": {
              "src": "assets/projects/skytiles-before.webp",
              "caption": {
                "zh": "BeforeCKey · 操作前的观察画面。",
                "en": "BeforeCKey · view before the camera-range operation."
              }
            },
            "after": {
              "src": "assets/projects/skytiles-after.webp",
              "caption": {
                "zh": "AfterCKey · 操作后的观察画面。",
                "en": "AfterCKey · view after the camera-range operation."
              }
            }
          }
        ]
      },
      {
        "id": "controls",
        "title": {
          "zh": "可以直接验证的功能",
          "en": "Features you can try"
        },
        "controls": [
          [
            "Tab",
            {
              "zh": "在小地图与大地图之间切换",
              "en": "Switch between the small and large maps"
            }
          ],
          [
            "R",
            {
              "zh": "切换到 128×128 的中地图",
              "en": "Switch to the 128×128 medium map"
            }
          ],
          [
            "F / G",
            {
              "zh": "切换相关开关并执行可见性剔除",
              "en": "Toggle the relevant mode and perform visibility culling"
            }
          ],
          [
            "C",
            {
              "zh": "锁定或解除相机范围",
              "en": "Lock or unlock the camera range"
            }
          ],
          [
            "Space",
            {
              "zh": "重新分布瓦片位置",
              "en": "Redistribute tile positions"
            }
          ]
        ],
        "lead": {
          "zh": "通过相同的操作检查不同地图规模下的行为，观察地图数据、相机范围与绘制结果怎样相互影响。",
          "en": "Use the same controls to inspect behavior across map scales. The focus is the connection between map data, camera behavior, and drawing logic."
        }
      }
    ],
    "links": [
      {
        "url": "https://huskytiles.creght.site/",
        "label": {
          "zh": "打开项目网站",
          "en": "Open project website"
        }
      },
      {
        "url": "https://github.com/siempre-2004/SkyTiles_VisualStudio",
        "label": {
          "zh": "查看源代码",
          "en": "Source code"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "kingdoms",
    "slug": "four-kingdoms",
    "title": {
      "zh": "Four Kingdoms · 四国",
      "en": "Four Kingdoms"
    },
    "kicker": {
      "zh": "桌游 / 规则与系统设计",
      "en": "BOARD GAME / RULES AND SYSTEM DESIGN"
    },
    "summary": {
      "zh": "联盟带来捷径，也留下背叛的机会。",
      "en": "An alliance opens a route—and an opportunity for betrayal."
    },
    "intro": {
      "zh": "以四国竞争为背景的桌游项目。玩家调兵、守城、结盟和背叛，围绕地图、卡牌与传送港口做选择。设计的核心问题是：怎样让合作值得尝试，又保留选择的代价？",
      "en": "A board-game project about four competing kingdoms. Players deploy troops, defend cities, form alliances, and betray partners through a shared map, cards, and teleport ports. The design asks how to make cooperation appealing while retaining its costs."
    },
    "hero": "assets/four-kingdoms.png",
    "heroCaption": {
      "zh": "桌面原型与玩家操作。",
      "en": "The tabletop prototype in play."
    },
    "tags": [
      "系统设计 / System design",
      "桌面原型 / Tabletop",
      "规则迭代 / Rule iteration"
    ],
    "facts": [
      {
        "title": {
          "zh": "设计重点",
          "en": "FOCUS"
        },
        "text": {
          "zh": "合作、利益交换与背叛",
          "en": "Cooperation, shared benefits, and betrayal"
        }
      },
      {
        "title": {
          "zh": "我的工作",
          "en": "MY WORK"
        },
        "text": {
          "zh": "机制设计、地图绘制与合作机制分析",
          "en": "Mechanics, map drawing, and analysis of cooperation"
        }
      },
      {
        "title": {
          "zh": "验证方式",
          "en": "METHOD"
        },
        "text": {
          "zh": "桌面原型与规则调整",
          "en": "Tabletop prototypes and rule adjustments"
        }
      }
    ],
    "sections": [
      {
        "id": "system",
        "title": {
          "zh": "把玩家关系写进规则",
          "en": "Put player relationships into the rules"
        },
        "cards": [
          {
            "title": {
              "zh": "地图与路线",
              "en": "Map and routes"
            },
            "text": {
              "zh": "地形、关口和港口决定军队如何移动，也决定哪些位置值得争夺或共享。",
              "en": "Terrain, passes, and ports shape movement and the value of contested or shared locations."
            }
          },
          {
            "title": {
              "zh": "卡牌与战斗",
              "en": "Cards and combat"
            },
            "text": {
              "zh": "攻击、防御、治疗和指令卡提供不同选择，使战斗结果与资源使用相互影响。",
              "en": "Attack, defense, healing, and command cards link combat decisions to resource use."
            }
          },
          {
            "title": {
              "zh": "联盟与传送",
              "en": "Alliances and teleportation"
            },
            "text": {
              "zh": "共享路线可以带来短期利益，也可能让盟友接近自己的腹地。合作和风险来自同一条规则。",
              "en": "Shared routes provide short-term benefits but may expose a player's territory. The same rule creates cooperation and risk."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/kingdoms-overview.webp",
            "caption": {
              "zh": "四国地图与不同区域的布局。",
              "en": "Maps and regional layouts for the four kingdoms."
            }
          }
        ]
      },
      {
        "id": "iteration",
        "title": {
          "zh": "规则怎样一步步改变",
          "en": "How the rules changed"
        },
        "lead": {
          "zh": "原项目记录保留了三轮围绕联盟的调整：先加入合作成本，再修改结盟时机，之后把背叛作为策略空间的一部分。",
          "en": "The project records three alliance-related adjustments: introduce a cost, change the timing, then treat betrayal as part of the strategic space."
        },
        "cards": [
          {
            "title": {
              "zh": "01 · 给联盟加上成本",
              "en": "01 · Give alliances a cost"
            },
            "text": {
              "zh": "早期版本要求交换城市标记，并限制第一回合结盟，避免两名玩家一开始就联合压制其他人。",
              "en": "Early rules require city-token exchanges and prevent first-round alliances, limiting immediate two-player domination."
            }
          },
          {
            "title": {
              "zh": "02 · 调整时机与风险",
              "en": "02 · Adjust timing and risk"
            },
            "text": {
              "zh": "后续记录把结盟起点改为第五回合，并加入联盟港口，让共享通路带来便利，也带来防守压力。",
              "en": "Later rules move alliance formation to round five and add alliance ports, balancing access with defensive exposure."
            }
          },
          {
            "title": {
              "zh": "03 · 保留背叛的选择",
              "en": "03 · Keep betrayal possible"
            },
            "text": {
              "zh": "观察到强弱关系会影响结盟意愿后，规则讨论转向中等实力玩家的合作，以及背叛所带来的短期利益和后续风险。",
              "en": "As relative strength affects willingness to ally, the design shifts toward cooperation between mid-strength players and the benefits and risks of betrayal."
            }
          }
        ],
        "images": [
          {
            "src": "assets/projects/kingdoms-prototype.webp",
            "caption": {
              "zh": "早期桌面原型与规则讨论记录。",
              "en": "An early tabletop prototype and rule-discussion record."
            }
          },
          {
            "src": "assets/projects/kingdoms-playtest.webp",
            "caption": {
              "zh": "玩家实际操作棋盘与标记。",
              "en": "Players using the board and tokens."
            }
          }
        ]
      },
      {
        "id": "reflection",
        "title": {
          "zh": "这一项目练习了什么",
          "en": "What this project develops"
        },
        "lead": {
          "zh": "把“合作是否可靠”拆成可玩的规则：玩家能得到什么、需要付出什么、什么时候值得背叛。地图、卡牌和联盟机制需要一起调整，单独改一条规则也可能改变整个局面。",
          "en": "Turn the question of reliable cooperation into playable decisions: what a player gains, what it costs, and when betrayal becomes attractive. Maps, cards, and alliances need to be considered together because one rule can change the whole game."
        }
      }
    ],
    "links": [
      {
        "url": "https://hufourkingdoms.creght.site/",
        "label": {
          "zh": "打开项目网站",
          "en": "Open project website"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "mini",
    "slug": "mini-games",
    "title": {
      "zh": "小游戏与碰撞实验",
      "en": "Small Games & Collision Studies"
    },
    "kicker": {
      "zh": "小型原型 / 游戏数学 / 玩法实现",
      "en": "SMALL PROTOTYPES / GAME MATH / GAMEPLAY"
    },
    "summary": {
      "zh": "每个小项目，解决一个具体问题。",
      "en": "A small project for a concrete technical question."
    },
    "intro": {
      "zh": "这一组练习覆盖碰撞检测、2D 射击和 Unity 玩法原型。它们的范围较小，重点在于把一个算法或机制做成能运行、能观察的结果。",
      "en": "Focused exercises covering collision detection, 2D shooting, and Unity gameplay prototypes. Each turns a small algorithm or mechanic into something that can be run and inspected."
    },
    "hero": "assets/projects/mini-asteroid.webp",
    "heroCaption": {
      "zh": "小行星射击原型的游戏画面。",
      "en": "A view of the asteroid shooting prototype."
    },
    "tags": [
      "C++",
      "raylib",
      "Unity",
      "SAT"
    ],
    "facts": [
      {
        "title": {
          "zh": "项目范围",
          "en": "SCOPE"
        },
        "text": {
          "zh": "小型技术练习与可玩原型",
          "en": "Focused exercises and playable prototypes"
        }
      },
      {
        "title": {
          "zh": "数学主题",
          "en": "MATH"
        },
        "text": {
          "zh": "边界框与分离轴检测",
          "en": "Bounding boxes and separating-axis tests"
        }
      },
      {
        "title": {
          "zh": "玩法主题",
          "en": "GAMEPLAY"
        },
        "text": {
          "zh": "移动、射击与碰撞反馈",
          "en": "Movement, shooting, and collision feedback"
        }
      }
    ],
    "sections": [
      {
        "id": "collision",
        "title": {
          "zh": "碰撞检测：从边界框到分离轴",
          "en": "Collision: from bounding boxes to separating axes"
        },
        "lead": {
          "zh": "用 C++ 练习 AABB 与 SAT 的基本判定。AABB 检查轴对齐边界框是否重叠；SAT 把凸多边形投影到候选轴上，只要存在分离轴就可以判断没有相交。",
          "en": "C++ exercises in AABB and SAT. AABB checks overlap between axis-aligned bounds. SAT projects convex polygons onto candidate axes; a separating axis proves that they do not overlap."
        },
        "images": [
          {
            "src": "assets/projects/mini-sat.webp",
            "caption": {
              "zh": "SAT 检测实现的代码记录。",
              "en": "Code documentation of the SAT implementation."
            }
          }
        ]
      },
      {
        "id": "octopus",
        "title": {
          "zh": "章鱼射击小游戏",
          "en": "Octopus shooting prototype"
        },
        "lead": {
          "zh": "使用 C++ 与 raylib 制作的 2D 小游戏。把角色、目标、发射物与碰撞放进同一个更新循环，练习从输入到反馈的基本玩法实现。",
          "en": "A small 2D game in C++ and raylib, connecting a player, targets, projectiles, and collisions in one update loop."
        },
        "images": [
          {
            "src": "assets/projects/mini-octopus.webp",
            "caption": {
              "zh": "章鱼小游戏的运行画面。",
              "en": "The octopus game running."
            }
          }
        ]
      },
      {
        "id": "asteroid",
        "title": {
          "zh": "Unity 小行星原型",
          "en": "Unity asteroid prototype"
        },
        "lead": {
          "zh": "围绕飞船移动、射击和目标碰撞制作的小型玩法练习，用直接可见的反馈检查基础游戏循环。",
          "en": "A small gameplay exercise built around ship movement, shooting, and target collisions, with visible feedback for inspecting the game loop."
        },
        "images": [
          {
            "src": "assets/projects/mini-asteroid.webp",
            "caption": {
              "zh": "飞船、目标与发射物构成的射击画面。",
              "en": "A shooting scene with the ship, targets, and projectiles."
            }
          }
        ]
      }
    ],
    "links": [
      {
        "url": "https://github.com/siempre-2004",
        "label": {
          "zh": "更多代码项目",
          "en": "More code projects"
        }
      }
    ],
    "videos": []
  },
  {
    "id": "mesh",
    "slug": "mesh-editing",
    "title": {
      "zh": "曲线引导的局部网格编辑",
      "en": "Curve-guided Mesh Editing"
    },
    "kicker": {
      "zh": "几何处理 / Python / 优化基线",
      "en": "GEOMETRY PROCESSING / PYTHON / OPTIMIZATION BASELINE"
    },
    "summary": {
      "zh": "移动一条曲线，观察周围曲面怎样响应。",
      "en": "Move a curve and inspect how its surrounding surface responds."
    },
    "intro": {
      "zh": "一个用于探索局部网格变形的早期原型。根据编辑后的目标曲线优化顶点位置，同时约束曲线误差、边界漂移和不平滑位移。",
      "en": "An early prototype for local mesh deformation. Vertex positions are optimized to follow an edited curve while penalizing curve error, boundary drift, and rough displacement."
    },
    "hero": "assets/projects/mesh-study.svg",
    "heroCaption": {
      "zh": "局部曲面变形的解析示意图；不是仓库求解器的运行截图。",
      "en": "An analytic illustration of local surface deformation, separate from the repository solver."
    },
    "tags": [
      "Python",
      "Streamlit",
      "Geometry",
      "Optimization"
    ],
    "facts": [
      {
        "title": {
          "zh": "当前实现",
          "en": "CURRENT IMPLEMENTATION"
        },
        "text": {
          "zh": "逐实例几何优化基线",
          "en": "Per-instance geometry optimization baseline"
        }
      },
      {
        "title": {
          "zh": "当前输入",
          "en": "CURRENT INPUT"
        },
        "text": {
          "zh": "平面网格与固定曲线索引",
          "en": "A flat grid and fixed curve indices"
        }
      },
      {
        "title": {
          "zh": "展示方式",
          "en": "INTERFACE"
        },
        "text": {
          "zh": "Streamlit 参数与 3D 视图",
          "en": "Streamlit parameters and 3D views"
        }
      }
    ],
    "sections": [
      {
        "id": "method",
        "title": {
          "zh": "把编辑目标变成优化条件",
          "en": "Turn an edit into optimization conditions"
        },
        "lead": {
          "zh": "把需要移动的曲线作为目标，同时控制周围表面的变形方式。当前实现每次为输入求解顶点位置。",
          "en": "Use the edited curve as a target while controlling how the surrounding surface deforms. The current implementation optimizes vertex positions for each input."
        },
        "flow": {
          "zh": [
            "设定目标曲线",
            "计算几何误差",
            "约束边界与平滑性",
            "优化顶点位置",
            "查看变形结果"
          ],
          "en": [
            "Set a target curve",
            "Measure geometric error",
            "Constrain boundaries and smoothness",
            "Optimize vertices",
            "Inspect the result"
          ]
        },
        "cards": [
          {
            "title": {
              "zh": "曲线误差",
              "en": "Curve error"
            },
            "text": {
              "zh": "让网格中的曲线接近用户设定的目标曲线。",
              "en": "Bring the curve on the grid toward the requested target."
            }
          },
          {
            "title": {
              "zh": "边界漂移",
              "en": "Boundary drift"
            },
            "text": {
              "zh": "限制外围顶点的移动，减少局部编辑对远处区域的影响。",
              "en": "Limit movement at the boundary to reduce effects away from the edit."
            }
          },
          {
            "title": {
              "zh": "位移平滑",
              "en": "Displacement smoothness"
            },
            "text": {
              "zh": "约束相邻区域的位移变化，避免表面出现过于突兀的变化。",
              "en": "Penalize rough displacement changes between neighboring regions."
            }
          }
        ]
      },
      {
        "id": "scope",
        "title": {
          "zh": "目前做到哪里",
          "en": "Current scope"
        },
        "lead": {
          "zh": "当前使用平面网格和固定曲线索引，便于先检查优化过程。真实网格导入、把自由笔画映射到表面、按测地距离选取局部区域，以及学习式位移预测，都是后续方向。",
          "en": "The baseline uses a flat grid with fixed curve indices to keep topology simple. Real-mesh loading, mapping a stroke to surface vertices, selecting a local region by geodesic distance, and learned displacement prediction are future directions."
        },
        "cards": [
          {
            "title": {
              "zh": "已有基线",
              "en": "Existing baseline"
            },
            "text": {
              "zh": "逐实例优化顶点位置；通过 Streamlit 调整参数并旋转 3D 视图。",
              "en": "Optimize vertices for each instance, adjust parameters, and rotate the 3D views in Streamlit."
            }
          },
          {
            "title": {
              "zh": "后续评估",
              "en": "Future evaluation"
            },
            "text": {
              "zh": "在接入真实网格后比较局部形状保持与交互延迟，再评估新的求解方式。",
              "en": "After real-mesh integration, evaluate local shape preservation and latency before comparing additional approaches."
            }
          }
        ]
      },
      {
        "id": "run",
        "title": {
          "zh": "运行原型",
          "en": "Run the prototype"
        },
        "code": "python -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt\nstreamlit run app.py",
        "lead": {
          "zh": "克隆下方仓库后，在项目目录运行这些命令，再打开终端给出的本地地址。",
          "en": "Clone the repository below, run these commands in its directory, and open the local URL printed by Streamlit."
        }
      }
    ],
    "links": [
      {
        "url": "https://github.com/siempre-2004/curve-guided-mesh-editing",
        "label": {
          "zh": "查看代码与运行说明",
          "en": "Code and run instructions"
        }
      }
    ],
    "videos": []
  }
];
