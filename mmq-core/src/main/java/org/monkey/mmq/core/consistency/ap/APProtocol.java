/*
 * Copyright 2021-2021 Monkey Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.monkey.mmq.core.consistency.ap;

import org.monkey.mmq.core.consistency.Config;
import org.monkey.mmq.core.consistency.ConsistencyProtocol;

/**
 * ap protocol.
 *
 * @author solley
 */
@SuppressWarnings("all")
public interface APProtocol<C extends Config, P extends RequestProcessor4AP> extends ConsistencyProtocol<C, P> {

}
